import {RouterModule ,Routes} from '@angular/router'
import { HomeComponent } from 'app/home/home.component';
import { ServicesComponent } from 'app/services/services.component';
import { TestimonialsComponent } from 'app/testimonials/testimonials.component';
import { WorkComponent } from 'app/work/work.component';
import { ContactComponent } from 'app/contact/contact.component';
import { CareerComponent } from 'app/career/career.component';
 const routes:Routes=[
    {path:'',component:HomeComponent },    
    {path:'home',component:HomeComponent},
    {path:'services',component:ServicesComponent},
    {path:'testmonials',component:TestimonialsComponent},
    {path:'work',component:WorkComponent},
    {path:'career',component:CareerComponent},
    {path:'contact',component:ContactComponent}
    
];
export const Approuter=RouterModule.forRoot(routes);