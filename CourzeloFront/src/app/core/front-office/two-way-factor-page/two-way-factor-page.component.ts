import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { TokenStorageService } from 'src/app/service/token-storage-service.service';

@Component({
  selector: 'app-two-way-factor-page',
  templateUrl: './two-way-factor-page.component.html',
  styleUrls: ['./two-way-factor-page.component.css']
})
export class TwoWayFactorPageComponent {
  user: any = {};
  code: "";
  isShow = true;
  constructor(
    private authService: AuthServiceService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
   ) { }


  
  verfiyCode(){
    console.log('Code entré:',this.code);
    this.authService.getUserByVerificationCode(this.code).subscribe(
      (data) => {
        this.user = data;
        this.router.navigate(['/addProfile']);
      },
      (error) => {
        //this.router.navigate(['/register']);
      console.log("mafamechh menou")
       
     }
    );

  }

}
