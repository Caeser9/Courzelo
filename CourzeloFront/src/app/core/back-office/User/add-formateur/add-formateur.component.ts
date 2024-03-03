import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { User } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-add-formateur',
  templateUrl: './add-formateur.component.html',
  styleUrls: ['./add-formateur.component.css']
})
export class AddFormateurComponent {
  user: any = {};
  isLoggedIn: Boolean = false;
  isLoginFailed = false;
  AdminForm: FormGroup;
  
  constructor(private authService: AuthServiceService,
    // private messageService: MessageService,
    private _routes:Router,
     private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.user = new User();
    this.AdminForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
    
}

registerAdmin() {
  console.log(this.user.password)
    this.user.roles = ["formateur"]
    console.log("user = ",this.user)
    this.authService.signupWithIdentifiant(this.user).subscribe(
      (data) => {

       console.log("kdhee el user " , this.user)
      
      },
      (error) => {
        alert("this email already exist !!! ")
       console.log("erreur register .component")
      }
    );
  }
}
