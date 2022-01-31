import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  number:any="";
  amount:any="";
  totalAmount:any="";
  availableAmount:any="";

  pay(){
    if(this.number == localStorage.getItem("Phone")){
      this.totalAmount = localStorage.getItem("Available Balance")
      this.availableAmount = this.totalAmount-this.amount
      localStorage.setItem("Available Balance",this.availableAmount);
      this.route.navigate(['/']);

    }

  }
}
