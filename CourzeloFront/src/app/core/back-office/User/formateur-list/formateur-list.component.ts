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
  searchInput: string = '';
  filteredFormateur: User[] = [];
  constructor(private userService:UserService){}


ngOnInit(): void {

  this.getformateurs()
}
getformateurs(){
  this.formateur=new User();
  this.formateur=this.userService.getUser("ROLE_FORMATEUR").subscribe((data) => {
    this.formateur = data;
    this.filteredFormateur = this.formateur;
  },
  (error) => {
    console.error("Erreur lors de la récupération des données :", error);
  }
);
}

onSearch(): void {
  console.log('Search Input:', this.searchInput);
  
  this.filteredFormateur = this.formateur.filter(user =>
    user.email.toLowerCase().includes(this.searchInput.toLowerCase()) 
  );
  console.log('All Blogs:', this.formateur);
}
}
