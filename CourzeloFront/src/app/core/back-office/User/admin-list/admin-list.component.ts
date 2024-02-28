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
  listeAdmin!:User[];
  profile:any
  constructor(private userService:UserService,private profileservice:ProfileService){}


ngOnInit(): void {

  this.getUsersWithProfiles();
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
getProfileByIdUser(id: number) {
  this.profileservice.getProfileByIdUser(this.admin.id).subscribe(
    (data) => {
      this.profile = data

    });

}
getProfilePhotoUrl(p: Profile): string {
  return this.profileservice.getPhoto(p.photo);
}

getUsersWithProfiles(): void {
  this.userService.getUser("ROLE_ADMIN").subscribe(users => {
    // Pour chaque utilisateur, récupérer également son profil
    if (Array.isArray(users)) {
      // Pour chaque utilisateur, récupérer également son profil
      this.usersWithProfiles = users.map((user: any) => {
        return {
          user: user,
          profile: this.profileservice.getProfileByIdUser(user.id)
        
        };
      });
    }
  });
}
}
