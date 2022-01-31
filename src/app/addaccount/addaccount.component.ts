import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.css']
})
export class AddaccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name:any = "";
  phone:any = "";
  aNumber:any = "";
  iBalance:any = "";
  aBalance:any = "";


create(){
  localStorage.setItem("Name", this.name);
  localStorage.setItem("Phone", this.phone);
  localStorage.setItem("Acc Number", this.aNumber);
  localStorage.setItem("Initial Balance", this.iBalance);
  localStorage.setItem("Available Balance", this.aBalance);
}


}
