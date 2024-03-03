import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { TokenStorageService } from 'src/app/service/token-storage-service.service';

@Component({
  selector: 'app-two-way-factor-page',
  templateUrl: './two-way-factor-page.component.html',
  styleUrls: ['./two-way-factor-page.component.css']
})
export class TwoWayFactorPageComponent {
  user: any = {};
  verificationCode: any;
  isShow = true;
  private messageService: MessageService
  constructor(
    private authService: AuthServiceService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
   ) { }


  
  verfiyCode(){
    console.log(this.verificationCode);
    this.authService.getUserByVerificationCode(this.verificationCode).subscribe(
      (data) => {
       if(data){
       
      //  this.router.navigate(['/login']);
       }else {
       // this.authService.de
       alert("Bad Code ")
        console.log("tfasakh")
       // this.router.navigate(['/editProfile']);
       }
      },
      (error) => {
        //this.router.navigate(['/register']);
      console.log("mafamechh menou",error)
       
     }
    );

  }

}
