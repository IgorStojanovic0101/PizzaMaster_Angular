import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [


  {
    path: 'auth',
    loadChildren: () =>
      import('./infrastructure/modules/auth-routing/auth-routing.module').then((m) => m.AuthRoutingModule),
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./infrastructure/modules/menu-routing/home-routing.module').then((m) => m.HomeRoutingModule),

  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./infrastructure/modules/admin-routing/admin-routing.module').then((m) => m.AdminRoutingModule),

  },
  

  { path: '', redirectTo: 'auth', pathMatch: 'full' }, // Redirect to 'auth' module
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
