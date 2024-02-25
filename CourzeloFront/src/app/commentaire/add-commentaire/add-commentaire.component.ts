import { Component } from '@angular/core';
import { CommentaireService } from 'src/app/services/commentaire.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Commentaire } from 'src/app/models/commentaire';

@Component({
  selector: 'app-add-commentaire',
  templateUrl: './add-commentaire.component.html',
  styleUrls: ['./add-commentaire.component.css']
})
export class AddCommentaireComponent {
  addCommentaireForm:FormGroup;
  constructor(private commentaireService: CommentaireService,private formBuilder: FormBuilder) { 
    this.addCommentaireForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      corp: ['', Validators.required]
    });
  }
  onSubmit(): void {
    if (this.addCommentaireForm.valid) {
      const CommentaireData: Commentaire = this.addCommentaireForm.value;
      this.commentaireService.addCommentaire(CommentaireData).subscribe(
        response => {
          alert('Commentaire ajouté avec succès !');
         
        },
        error => {
          alert('Une erreur est survenue lors de l\'ajout du Commentaire.');
        }
      );
    } else {
      alert('Veuillez remplir correctement tous les champs.');
    }
  }

}
