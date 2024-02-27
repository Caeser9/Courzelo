import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css']
})
export class StripeComponent implements OnInit {
  clientSecret: string | null = null;
  constructor(private http: HttpClient , private ac :ActivatedRoute) {   }
  handler:any = null;
  amount: any
url= "http://localhost:9000/Courzelou/cour"
  ngOnInit() {
   this.amount =this.ac.snapshot.paramMap.get('prix');
 
    this.loadStripe();
  }
 
  pay(amount: number) {    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51K1TBAIBKkiTlXRI38R1d7ZO7Yw8oA6ulN8nF62qay8d33sSOIFVVzFC1xRCKntmPUFaxEEmwGFfCtEnhoMTojeB005vy5pVDN',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        
        console.log(token)
        alert('Token Created!!');
      }
      
    });
    
 
    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * 100
    });
    this.http.post<any>(`${this.url}/stripe/${this.amount}` ,{}).subscribe(data => {
      this.clientSecret = data;
    });
  }
 
  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51K1TBAIBKkiTlXRI38R1d7ZO7Yw8oA6ulN8nF62qay8d33sSOIFVVzFC1xRCKntmPUFaxEEmwGFfCtEnhoMTojeB005vy5pVDN',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }
}
