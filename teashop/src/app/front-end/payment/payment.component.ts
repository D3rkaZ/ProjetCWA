import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {


  public method_visa:string= "block_none";
  public method_paypal:string = "block_none";
  public method_ecart:string = "block_none";

  changePaymentMethod_Visa()
  {
    if((this.method_visa=="block_none"&&this.method_paypal!="block_none")||(this.method_visa=="block_none"&&this.method_ecart!="block_none") )
    {
      this.method_visa= "method";
      this.method_paypal="block_none";
      this.method_ecart= "block_none";
    }
    else
      this.method_visa="method";
   
  }
  changePaymentMethod_Paypal()
  {
    if((this.method_paypal=="block_none"&&this.method_visa!="block_none")||(this.method_paypal=="block_none"&&this.method_ecart!="block_none") )
    {
      this.method_visa= "block_none";
      this.method_paypal="method paypal";
      this.method_ecart= "block_none";
    }
    else
      this.method_paypal="method paypal";
  }

  changePaymentMethod_Ecart()
  {
    if((this.method_ecart=="block_none"&&this.method_visa!="block_none")||(this.method_ecart=="block_none"&&this.method_paypal!="block_none") )
    {
      this.method_visa= "block_none";
      this.method_paypal="block_none";
      this.method_ecart= "method paypal";
    }
    else
      this.method_ecart="method paypal";
  }

  constructor() { }


  ngOnInit(): void {
  }

}
