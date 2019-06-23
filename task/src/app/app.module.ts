import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { logging } from 'protractor';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { FormsModule }   from '@angular/forms';

const myRoutes: Routes = [
{path:"login" ,component:LoginComponent}  ,
{path:"orderdetails",component:OrderdetailsComponent}  ]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrderdetailsComponent
    
  ],

  imports: [
    BrowserModule, 
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes),
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
