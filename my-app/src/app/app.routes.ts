import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { FeedbackComponent } from './components/feedback/feedback.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'products', component:ProductComponent},
    {path:'checkout',component:CheckoutComponent},
    {path:'feedback',component:FeedbackComponent},
    {path:'**',component:HomeComponent}
];
