import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  admin : any
  listeAdmin!:User[];
  constructor(private userService:UserService){}


ngOnInit(): void {

  this.getAdmins()
}
getAdmins(){
  this.admin=new User();
  this.admin=this.userService.getUser("ROLE_ADMIN").subscribe((data) => {
    this.admin = data;
  },
  (error) => {
    console.error("Erreur lors de la récupération des données :", error);
  }
);

}
}
