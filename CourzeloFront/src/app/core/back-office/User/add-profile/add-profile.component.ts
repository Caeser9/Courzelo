import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/service/profile.service';
import { TokenStorageService } from 'src/app/service/token-storage-service.service';
import { Profile } from 'src/app/shared/model/profile.module';
import { User } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit{
  user: User;
  profile = new Profile();
  profileForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private profileService: ProfileService,
    private tokenStorageService: TokenStorageService) { }

    ngOnInit(): void {
      this.profileForm = this.formBuilder.group({
        firstName: ['', [Validators.required, Validators.minLength(3)]],
        lastName: ['', [Validators.required, Validators.minLength(3)]],
        phone: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern(/^-?(0|[1-9]\d*){8}$/)]],
        address: ['', [Validators.required, Validators.minLength(8)]],
        email: ['', [Validators.required, Validators.email]],
  
      });
      this.user = this.tokenStorageService.getUser()
      this.profile.user.id = this.user.id;
    }

    get profileFormControl() {
      return this.profileForm.controls;
    }


    addProfile() {

      this.profileService.addProfile(this.profile).subscribe(
        (data) => {
  
       
  
          this.router.navigate(['/home']);
  
  
        },
        (error) => {
         console.log("Problème servunu lors de l'ajout de profile")
  
        }
      )
    }
}
