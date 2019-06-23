import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MyserviceService]
})
export class LoginComponent implements OnInit {

  constructor(private myser: MyserviceService, private route: Router) { }
  validationsmsg

  ngOnInit() {
  }
  check(usrname: string, pwd: string) {
    var result = this.myser.checkcredintials(usrname, pwd);
    if (result == true) {
      this.route.navigate(['/orderdetails']);

      // this.validationsmsg='Valid Credintials'
    }
    else {
      this.validationsmsg = 'Invalid Credintials'
    }
  }
}
