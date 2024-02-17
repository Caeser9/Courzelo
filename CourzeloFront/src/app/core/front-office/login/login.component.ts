import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { TokenStorageService } from 'src/app/service/token-storage-service.service';
import { ERole } from 'src/app/shared/model/role';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  dark: boolean;
  user: any = {};
  isLoginFailed = false;
  loginForm: FormGroup;


 constructor(private formBuilder: FormBuilder, private authService: AuthServiceService,
  private tokenStorage: TokenStorageService,
  private router: Router,) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    
}
login(){
  console.log(this.user)
  this.authService.signInWithId(this.user).subscribe(
    (data) =>{
      this.user = data;
      console.log("kdhee token ")
      if (this.user) {
        this.tokenStorage.saveToken(this.user.token);
        this.tokenStorage.saveUser(this.user);
        this.tokenStorage.saveRole(this.user.roles);
        
        if (this.user.roles == ERole.ROLE_ADMIN) {
          console.log("wselll lena ba3ed el if ")
                this.router.navigate([`/home`])
              } else {
                this.router.navigate([`/navbar`])
              }

            }
    });
  }
}

