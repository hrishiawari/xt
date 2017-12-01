import { Component, OnInit, HostListener } from '@angular/core';
import{Router}from '@angular/router'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
private x:String;
  constructor(
    private router:Router
  ) { }
a;b;c;d;e;
  ngOnInit() {
    
  }

 pass;


  func(){
    this.x="red";
  }





  gotoHome(x){
   switch(x){
     case 'home': this.router.navigate(['home']);
     this.a=true,this.b=false,this.c=false,this.d=false,this.e=false;
     
     break;
     case 'services':this.router.navigate(['services']);
     this.a=false,this.b=true,this.c=false,this.d=false,this.e=false;
          break;
     case 'work': this.router.navigate(['work']);
     this.a=false,this.b=false,this.c=true,this.d=false,this.e=false;
     break;
     case 'careers':this.router.navigate(['career']);
     this.a=false,this.b=false,this.c=false,this.d=true,this.e=false;
     break;
     case 'contact':this.router.navigate(['contact']);
     this.a=false,this.b=false,this.c=false,this.d=false,this.e=true;
     break;
   }
// this.router.navigate(['home']);
}
}
