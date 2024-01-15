import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/presentation/components/home/home.component';
import { MenuComponent } from 'src/app/presentation/components/menu/menu.component';
import { RestoranComponent } from 'src/app/presentation/components/restoran/restoran.component';
import { AppComponent } from 'src/app/presentation/components/menu/app/app.component';


const homeRoutes: Routes = [
  // {
  //   path: "",
  //   component: AppComponent,
  //   children: [
  //     {
  //       path: "", // Empty path for "menu"
  //       pathMatch: "full", // Redirect only if the path is empty
  //       redirectTo: "home"
  //     },
  //     {
  //       path: "home",component: HomeComponent,
  //     },
  //     {
  //       path: "restoran", component: RestoranComponent,
  //     }
  //   ]
  // }

  {  path: "home",component: HomeComponent },
  { path: 'restoran', component: RestoranComponent },
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(homeRoutes)
  ],
  exports: [RouterModule],

})

export class HomeRoutingModule { }
