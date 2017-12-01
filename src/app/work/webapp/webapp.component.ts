import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webapp',
  templateUrl: './webapp.component.html',
  styleUrls: ['./webapp.component.css']
})
export class WebappComponent implements OnInit {

  constructor() { }
showCard:boolean=false;
  ngOnInit() {
  }
  show(){
    this.showCard=!this.showCard;
  }
}
