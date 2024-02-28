import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { ProfileService } from 'src/app/service/profile.service';
import { TokenStorageService } from 'src/app/service/token-storage-service.service';
import { Profile } from 'src/app/shared/model/profile.module';
import { ERole } from 'src/app/shared/model/role';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  dark: boolean;
  user: any = {};
  isLoggedIn: Boolean = false;
  isLoginFailed = false;
  loginForm: FormGroup;
  profile: Profile

 constructor(private formBuilder: FormBuilder, private authService: AuthServiceService,
  private tokenStorage: TokenStorageService,
  private router: Router,
  private profileService: ProfileService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    
}
login(){
  console.log(this.user)
  this.authService.signInWithId(this.user).subscribe(
    (data) =>{
      this.user = data;
      
      if (this.user) {
        this.tokenStorage.saveToken(this.user.token);
        this.tokenStorage.saveUser(this.user);
        this.tokenStorage.saveRole(this.user.roles);
        this.isLoggedIn = true;
        this.isLoginFailed = false;
           
     ///   if (this.user.roles == ERole.ROLE_ADMIN) {
          console.log("wsel lena ")
          this.profileService.getProfileByIdUser(this.user.id).subscribe(
            (data) => {
              this.profile = data  
              console.log("Profile", data)
              if (this.profile != null) {
                this.router.navigate([`/editProfile/`])
              } else {
                this.router.navigate([`/addProfile/`])
              }
  
            })

          //  }//lena nkamel el routee 
    }
  },
    (error) => {
     
      this.isLoginFailed = true;
      this.isLoggedIn = false;
      console.log('Here error', error);

    }
  )};
}

