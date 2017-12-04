import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactserService } from 'app/netservices/contactser.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactmsg: string;
  contacttitle: string;
  okk;
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
   
    window.onscroll = function () { window.scrollTo(0,0); };
    this.ser.submit(myFrm.form.value).subscribe(
      data => {
      this.GoldData=data
      if(this.GoldData.success==true)
      {
        this.okk=true;
        this.contacttitle=" Thank you for getting in touch!";
        this.contactmsg="  One of our colleagues will get back to you shortly.Have a great day!"
        
      }
      else{
        this.okk=true;
        this.contacttitle="Something Went Wrong !!!";
        this.contactmsg="Please Try Again..."
      }
      }
      
    );
  }
  next(){
    this.okk=false;
    window.onscroll = function () { window.scrollTo(0,window.scrollY); };
  }

}
