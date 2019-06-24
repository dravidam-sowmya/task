import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  login: any;
  constructor(private router: Router) {
    // alert(JSON.stringify(this.router ))
    // console.log(this.router);
    // console.log(this.router.url);
    // console.log(window.URL);
    // console.log(window.);




    this.login = this.router.url

  }
  ngOnInit() {
    this.login = this.router.url;
    console.log(this.router.url);
  }
}