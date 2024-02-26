import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-formateur-list',
  templateUrl: './formateur-list.component.html',
  styleUrls: ['./formateur-list.component.css']
})
export class FormateurListComponent implements OnInit{

  formateur : any

  constructor(private userService:UserService){}


ngOnInit(): void {

  this.getformateurs()
}
getformateurs(){
  this.formateur=new User();
  this.formateur=this.userService.getUser("ROLE_FORMATEUR").subscribe((data) => {
    this.formateur = data;
  },
  (error) => {
    console.error("Erreur lors de la récupération des données :", error);
  }
);

}
}
