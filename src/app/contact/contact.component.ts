import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactserService } from 'app/netservices/contactser.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  status;
  data;
  GoldData:any;
  dtFrm = {
    name: '',
    email: '',
    phone: '',
    message:''
  };
  constructor(
    private ser:ContactserService
  ) { }

  ngOnInit() {
  }
  onFrmSub(myFrm?: NgForm) {
    
   
    this.ser.submit(myFrm.form.value).subscribe(
      data => {
      this.GoldData=data,
     console.log(this.GoldData);
     console.log(this.GoldData.success)
     document.getElementById("sidebar").classList.toggle('active');
      }
    );
  }
  next(){

    document.getElementById("sidebar").classList.toggle('active');
  }

}
