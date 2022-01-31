import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddaccountComponent } from './addaccount/addaccount.component';
import { PaymentComponent } from './payment/payment.component';
import { CheckbalanceComponent } from './checkbalance/checkbalance.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddaccountComponent,
    PaymentComponent,
    CheckbalanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
