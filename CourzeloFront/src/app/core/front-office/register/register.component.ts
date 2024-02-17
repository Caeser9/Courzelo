import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { ERole } from 'src/app/shared/model/role';
import { User } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  user = new User();

  constructor(private authService: AuthServiceService,
   // private messageService: MessageService,
   private _routes:Router,
    private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.user = new User();
    this.registerForm = this.formBuilder.group({
      username :[''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$")]],
      
    }
    /*
    nzidhaa wa9et nzid confirmer mot de passe 
    ,
      {
        validator: MustMatch('password', 'confirmPassword')

      },*/
    )

  }
  register() {
  console.log(this.user.password)
    this.user.roles = [ERole.ROLE_PARTICIPANT]
    this.user.id = 9 
    this.authService.signupWithUsername(this.user).subscribe(

      (data) => {

       console.log("kdhee el user " , this.user)
        this._routes.navigate(['/navbar']);

      },
      (error) => {
       console.log("mamchetech");

      }
    );
  }
}