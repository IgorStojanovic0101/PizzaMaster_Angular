import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ToastrService } from 'ngx-toastr';
import { Observable, of, switchMap, tap } from 'rxjs';
import { HomeService } from 'src/app/services/home/home.service';
import { ServiceResponse } from 'src/app/shared/client/serviceResponse';
import { RestoranResponseDTO } from 'src/app/shared/restoran/restoranResponseDTO';

@Component({
  selector: 'app-home',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
  encapsulation: ViewEncapsulation.None, 
  styles:[`

.mat-form-field-infix
  {
     border-top : 0;
     background-color:white;

  }
  .mat-sidenav
  {
  width: 25%;
  background-color: cornflowerblue;
  position: fixed;
  }
  

  
`]
})
export class MenuBarComponent {

  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  opened = false;
  restorans$!:Observable<RestoranResponseDTO[] | null>;

  constructor(private homeService : HomeService,private toastr: ToastrService) {}




  ngOnInit(): void {
   
   this.homeService.GetAllRestorans().pipe(
       tap((response) => {
         this.restorans$ = of(response.payload);
         console.log(response.payload)
       }),
     
    ).subscribe();

  
  
  }
  stopSliding()
  {
    this.opened=!this.opened;
    //console.log("Stop Sliding event");
    //this.authome.ShowDownEvent();
  }

  
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }
}
