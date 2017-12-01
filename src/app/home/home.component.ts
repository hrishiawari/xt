import { Component, OnInit } from '@angular/core';
// import{Router}from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    // private router:Router
  ) { }

  ngOnInit() {
  }

  cardclick(ap:String){
    console.log("in func");
    
    switch(ap){
      case 'ge': console.log("incase");
      
    window.location.href = 'https://play.google.com/store/apps/details?id=com.raj.bhagvatgeeta';
    break;

    case 'ss':
    window.location.href = 'https://play.google.com/store/apps/details?id=com.hrapps.solarsystem';
    break;

    case 'ch':
    window.location.href = 'https://play.google.com/store/apps/details?id=com.Chatrapati.ShivajiMaharaj';
    break;

    case 'aw':
    window.location.href = 'https://play.google.com/store/apps/details?id=com.xtantransh.aartivishwa';
    break;

    case 'sv':
    window.location.href = 'https://play.google.com/store/apps/details?id=com.xtantransh.svcet';
    break;

    case 'yc':
    window.location.href = 'https://play.google.com/store/apps/details?id=com.xtantransh.ycicl';
    break;
  }
}
}