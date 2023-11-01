import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [


  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth-routing/auth-routing.module').then((m) => m.AuthRoutingModule),
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./modules/menu-routing/home-routing.module').then((m) => m.HomeRoutingModule),

  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin-routing/admin-routing.module').then((m) => m.AdminRoutingModule),

  },
  

  { path: '', redirectTo: 'auth', pathMatch: 'full' }, // Redirect to 'auth' module
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
