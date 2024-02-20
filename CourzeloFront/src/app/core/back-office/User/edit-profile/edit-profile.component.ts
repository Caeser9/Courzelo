import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/service/profile.service';
import { TokenStorageService } from 'src/app/service/token-storage-service.service';
import { Profile } from 'src/app/shared/model/profile.module';
import { User } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit{
  user = new User();
  profileUser = new Profile();
  profileForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private profileService: ProfileService,
   // private messageService: MessageService,
    private tokenStorageService: TokenStorageService,
    private router: Router) { }


  ngOnInit(): void {

    this.user = this.tokenStorageService.getUser()
    this.getProfileByIdUser(this.user.id);

    this.profileForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern(/^-?(0|[1-9]\d*){8}$/)]],
      address: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  getProfileByIdUser(id: number) {
    this.profileService.getProfileByIdUser(id).subscribe(
      (data) => {
        this.profileUser = data

      });

  }

  modifyProfile(profileModifided = new Profile()) {
    profileModifided.user.id = this.user.id
    this.profileService.modifyProfile(profileModifided).subscribe(
      () => {


        this.router.navigate(['/home']);
       

      },
      (error) => {
       console.log("matbadalech")

      }
    )
  }
}
