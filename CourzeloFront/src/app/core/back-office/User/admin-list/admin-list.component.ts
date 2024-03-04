import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/service/profile.service';
import { UserService } from 'src/app/service/user.service';
import { Profile } from 'src/app/shared/model/profile.module';
import { User } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  usersWithProfiles: any[] = [];
  admin : any
 
  profile:any
  FormateurSearch: string = '';
  filteredFormateur: User[] = [];
  formateur: any
  constructor(private userService:UserService,private profileservice:ProfileService){}


ngOnInit(): void {

  this.getAdmins();
}
getAdmins(){
  this.admin=new User();
  this.admin=this.userService.getUser("ROLE_ADMIN").subscribe((data) => {
    this.admin = data;
    this.filteredFormateur = this.admin;
  },
  (error) => {
    console.error("Erreur lors de la récupération des données :", error);
  }
);

}

onSearch(): void {
  console.log('Search Input:', this.FormateurSearch);

  this.filteredFormateur = this.admin.filter(user =>
    user.email.toLowerCase().includes(this.FormateurSearch.toLowerCase()) 
  );
  console.log('All admins:', this.admin);
} 

getProfileByIdUser(id: number) {
  this.profileservice.getProfileByIdUser(this.admin.id).subscribe(
    (data) => {
      this.profile = data

    });

}
getProfilePhotoUrl(p: Profile): string {
  return this.profileservice.getPhoto(p.photo);
}

}
