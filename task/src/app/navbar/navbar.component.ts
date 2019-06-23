import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
login:string;
  constructor(private router: Router) { 
    
    // alert(JSON.stringify(this.router ))
    console.log(this.router);
    console.log(this.router.url);
    console.log(window.URL);
    // console.log(window.);
    
    
    
    
    this.login= this.router.url
  
  }

  ngOnInit() {
  }

}
