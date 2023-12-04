import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from 'src/app/presenter/components/admin/admin.component';

const adminRoutes: Routes = [
  {
    path: "", component: AdminComponent,

  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(adminRoutes)
  ],
  exports: [RouterModule],

})
export class AdminRoutingModule { }
