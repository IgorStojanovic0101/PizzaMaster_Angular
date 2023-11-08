import { Component, HostListener, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
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
  background-color: blue;
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

  parentFunction() {
    // Implement the functionality you want to execute in the parent component.
    console.log('Parent function was triggered by the child component');
  }
  @ViewChild('drawer') drawer: MatDrawer | undefined;

  toggleDrawer() {
    if (this.drawer) {
      this.drawer.toggle();
      }
    }

   private hasToggled = false;
private isBeyondInitialView = false;

@HostListener('window:scroll', ['$event'])
onScroll(event: Event) {
  const scrollPosition = window.scrollY;
  const threshold = window.innerHeight; // 100% height of the screen

  if (scrollPosition > threshold) {
    // Scrolling beyond the initial view
    if (!this.isBeyondInitialView) {
      // Perform the toggle action when first scrolling beyond the initial view
      this.toggleDrawer();
      this.isBeyondInitialView = true;
      this.hasToggled = true;
    }
  } else {
    // Scrolling within the initial view
    if (this.isBeyondInitialView && this.hasToggled) {
      // Perform the toggle action when scrolling back up within the initial view
      this.toggleDrawer();
      this.isBeyondInitialView = false;
    }
  }
}
}
