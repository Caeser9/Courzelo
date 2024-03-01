import { Component, OnInit } from '@angular/core';
import { FaculteService } from '../FaculteService/faculte.service';
import { Faculte } from '../FaculteClass/faculte';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-faculte',
  templateUrl: './add-faculte.component.html',
  styleUrls: ['./add-faculte.component.css']
})
export class AddFaculteComponent implements OnInit {
  Facultesaveform= new FormGroup({
    nom: new FormControl('',Validators.required),
    adresse: new FormControl('',Validators.required),
    telephone: new FormControl('',[Validators.required,Validators.minLength(8)]),
    description: new FormControl('',Validators.required),
    photoUrl: new FormControl()

  });
  
  faculte: Faculte={
    codeFaculte: '',
    nom: '',
    adresse: '',
    telephone: 0,
    description: '',
    photoUrl: ''
   
  };
  submitted = false;

  constructor(private faculteService : FaculteService, private router: Router){}
  
  saveFaculte():void{
    if(this.Facultesaveform.invalid){
      return;}
      const data ={
        nom: this.Facultesaveform.get('nom')!.value,
        adresse: this.Facultesaveform.get('adresse')!.value,
        telephone: this.Facultesaveform.get('telephone')!.value,
        description: this.Facultesaveform.get('description')!.value,
        photoUrl: this.Facultesaveform.get('photoUrl')!.value
      } ;
      this.faculteService.createFaculte(data).subscribe({
        next: (res)=>{
          console.log(res);
          this.submitted=true;
          this.router.navigateByUrl(`/uploadFacultePhoto/${res.codeFaculte}`);
        },
        error: (e) => console.error(e)
      });

  }
  newFaculte(): void{
    this.submitted=false;
    this.faculte = {
      codeFaculte: '',
      nom:'',
      adresse:'',
      telephone:0,
      description:'',
      photoUrl:''

    }
  }
  

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
