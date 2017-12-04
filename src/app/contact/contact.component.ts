import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactserService } from 'app/netservices/contactser.service';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  myFrm: FormGroup;
  contactmsg: string;
  contacttitle: string;
  okk;
  status;
  data;
  GoldData:any;
  // dtFrm = {
  //   name: '',
  //   email: '',
  //   phone: '',
  //   message:''
  // };
  constructor(
    private fb: FormBuilder,
    private ser:ContactserService
  ) { }

  ngOnInit() {
    this.myFrm = this.fb.group({
      name: ['', Validators.required],
      message: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]
      )],
      phone: ['',Validators.compose([
        Validators.required
      ])]
    });
  }
  onFrmSub() {
   
    window.onscroll = function () { window.scrollTo(0,0); };
    this.ser.submit(this.myFrm.value).subscribe(
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

  // onFrmSubmit() {
  //   console.log(this.myFrm.value);
  // }
  next(){
    this.okk=false;
    window.onscroll = function () { window.scrollTo(0,window.scrollY); };
  }

}
