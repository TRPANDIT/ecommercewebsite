import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { CartsComponent } from './carts/carts.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'cards',
    component: CardsComponent
  },
  {
    path:'sign-in',
    component: LoginFormComponent
  },
  {
    path:'sign-up',
    component: SignupFormComponent
  },
  {
    path:'carts',
    component: CartsComponent
  },
  {
    path:'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
