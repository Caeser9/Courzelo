import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Import FormBuilder and Validators
import { SupportService } from '../support.service';

@Component({
  selector: 'app-list-reclamation',
  templateUrl: './list-reclamation.component.html',
  styleUrls: ['./list-reclamation.component.css']
})
export class ListReclamationComponent implements OnInit {
  
  reclamationList: any[] = [];
  supportsaveform: FormGroup; // Define FormGroup for support form

  constructor(public shared: SupportService, private fb: FormBuilder) {
    this.supportsaveform = this.fb.group({ // Initialize form group with FormBuilder
      reclamationId: ['', Validators.required], // Add validators if needed
      titre: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getReclamationList();
  }

  getReclamationList(): void {
    this.shared.getAllSupports().subscribe(
      (data) => {
        this.reclamationList = data;
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des réclamations : ', error);
      }
    );
  }

  deleteReclamation(id: string): void {
    this.shared.deleteSupport(id).subscribe(
      () => {
        this.reclamationList = this.reclamationList.filter(reclamation => reclamation.reclamationId !== id);
        console.log('Réclamation supprimée avec succès.');
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la suppression de la réclamation : ', error);
      }
    );
  }

  updateReclamation(reclamation: any): void {
    this.shared.updateSupport(reclamation).subscribe(
      () => {
        console.log('Réclamation mise à jour avec succès.');
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la mise à jour de la réclamation : ', error);
      }
    );
  }

  saveSupport(): void {
    if (this.supportsaveform.valid) { // Check if form is valid
      const supportData = this.supportsaveform.value; // Get form values
      this.shared.createSupport(supportData).subscribe( // Call service method to save support
        () => {
          console.log('Support enregistré avec succès.');
          this.getReclamationList(); // Refresh reclamation list after saving
          this.supportsaveform.reset(); // Reset form after saving
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de l\'enregistrement du support : ', error);
        }
      );
    }
  }
}
