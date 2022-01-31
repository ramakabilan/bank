import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbalance',
  templateUrl: './checkbalance.component.html',
  styleUrls: ['./checkbalance.component.css']
})
export class CheckbalanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  number:any='';
  amount:any='';

  verify(){
    if(this.number == localStorage.getItem("Phone")){
      this.amount = localStorage.getItem('Available Balance')
    }
  }
}
