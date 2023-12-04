import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon'; 
import {MatListModule} from '@angular/material/list'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatSnackBarModule } from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from "@angular/material/input"
import {MatSelectModule} from "@angular/material/select"
import {MatAutocompleteModule} from "@angular/material/autocomplete"

import {MatButtonModule} from "@angular/material/button"
import {MatBadgeModule} from "@angular/material/badge"

import {MatSliderModule} from "@angular/material/slider"
import {MatTableModule} from "@angular/material/table"
import {MatPaginatorModule} from "@angular/material/paginator"
import {MatSortModule} from "@angular/material/sort"
import {MatDatepickerModule} from "@angular/material/datepicker"
import {MatNativeDateModule} from "@angular/material/core"

import {MatDialogModule} from "@angular/material/dialog"

@NgModule({
  declarations: [],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatBadgeModule,
    MatSliderModule,
    MatPaginatorModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSortModule,
    MatTableModule
    

  ],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
