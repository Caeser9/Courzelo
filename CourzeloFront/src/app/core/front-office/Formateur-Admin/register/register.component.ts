import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { ERole } from 'src/app/shared/model/role';
import { User } from 'src/app/shared/model/user.model';
import { MustMatch } from 'src/app/shared/validators/confirmPassword';

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
      confirmPassword:[''],
    }
    
    ,
      {
        validator: MustMatch('password', 'confirmPassword')

      },
    )

  }
  register() {
  console.log(this.user.password)
    this.user.roles = [ERole.ROLE_PARTICIPANT]
    console.log(this.user)
    this.authService.signupWithEmail(this.user).subscribe(
      (data) => {

       console.log("kdhee el user " , this.user)
       // this._routes.navigate(['/verify-code']);

      },
      (error) => {
       console.log("erreur register .component")
      }
    );
  }
}
