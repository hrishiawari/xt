import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { BgVideoComponent } from './bg-video/bg-video.component';
import { HomeComponent } from './home/home.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PartnersComponent } from './partners/partners.component';
import {MatCardModule} from '@angular/material';
import { CareerComponent } from './career/career.component';
import { Approuter } from 'app/app.router';
import { AndroidappsComponent } from './work/androidapps/androidapps.component';
import { WebappComponent } from './work/webapp/webapp.component';
import { XtantranshComponent } from './home/xtantransh/xtantransh.component';
import { FormsModule } from '@angular/forms';
import { ContactserService } from 'app/netservices/contactser.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ServicesComponent,
    ProductsComponent,
    WorkComponent,
    ContactComponent,
    FooterComponent,
    BgVideoComponent,
    HomeComponent,
    TestimonialsComponent,
    PartnersComponent,
    CareerComponent,
    AndroidappsComponent,
    WebappComponent,
    XtantranshComponent,
  
  ],
  imports: [
    BrowserModule,MatCardModule,Approuter, HttpClientModule,HttpModule, ReactiveFormsModule,
    FormsModule
  ],
  providers: [ContactserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
