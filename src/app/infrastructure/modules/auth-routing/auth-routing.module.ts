import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/presentation/components/login/login.component';
import { RegisterComponent } from 'src/app/presentation/components/register/register.component';


const authRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule],

})


export class AuthRoutingModule { }
