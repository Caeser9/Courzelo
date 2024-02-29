import { Component, OnInit } from '@angular/core';  
import { FormControl, FormGroup, Validators } from '@angular/forms';  
import { SupportService } from '../support.service'; 
import { Support } from '../models/support.model'; 

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  constructor(private supportService: SupportService) { }  
  
  submitted = false;  
  
  ngOnInit() {  
    this.submitted = false;  
  }  
  
  supportsaveform = new FormGroup({  
    reclamationId: new FormControl('', [Validators.required]),  
    titre: new FormControl('', [Validators.required, ]),  
    description: new FormControl('', [Validators.required,Validators.minLength(10)])  
  });
  
  
  saveSupport() {  
    const support: Support = { 
      reclamationId: this.supportsaveform.get('reclamationId')!.value!,  
      titre  : this.supportsaveform.get('titre')!.value!,  
      description  : this.supportsaveform.get('description')!.value! , 
      dateReclamation: new Date(),
    };

    this.submitted = true;  
    this.save(support);  
  }
  
  save(support: Support) {  
    this.supportService.createSupport(support)  
      .subscribe(
        data => console.log(data,('Réclamation supprimée avec succès.')), 
        error => console.log(error)
      );  
    this.supportsaveform.reset();  
  }
  
  get SupportreclamationId() {  
    return this.supportsaveform.get('reclamationId');  
  }  
  
  get Supporttitre() {  
    return this.supportsaveform.get('titre');  
  }  
  
  get SupportDescription() {  
    return this.supportsaveform.get('description');  
  }  
  
  addSupportForm() {  
    this.submitted = false;  
    this.supportsaveform.reset();  
  }  
}