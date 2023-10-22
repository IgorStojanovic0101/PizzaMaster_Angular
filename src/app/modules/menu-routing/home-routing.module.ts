import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MenuBarComponent } from 'src/app/components/menu-bar/menu-bar';
import { HomeComponent } from 'src/app/components/home/home.component';


const homeRoutes: Routes = [
  {
    path: "",
    component: MenuBarComponent,
    children: [
      {
        path: "", // Empty path for "menu"
        pathMatch: "full", // Redirect only if the path is empty
        redirectTo: "home"
      },
      {
        path: "home",
        component: HomeComponent
      }
    ]
  }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(homeRoutes)
  ],
  exports: [RouterModule],

})

export class HomeRoutingModule { }
