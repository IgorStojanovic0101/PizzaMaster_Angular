import { Component, HostListener, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { ToastrService } from 'ngx-toastr';
import { Observable, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent {
  isExpanded = false;




@ViewChild('drawer') drawer: MatDrawer | undefined;

  toggleDrawer() {
    if (this.drawer) {
      this.drawer.toggle();
      this.isExpanded = !this.isExpanded;

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
