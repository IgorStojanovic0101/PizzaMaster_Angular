import { Component, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { ToastrService } from 'ngx-toastr';
import { Observable, of, switchMap, tap } from 'rxjs';
import { Dropdown_ResponseDTO } from 'src/app/domain/shared/dropdown/dropdown_ResponseDTO';
import { HomeService } from '../../services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None,
  styles:[`


::ng-deep .mat-expansion-panel-header .mat-expansion-indicator {
  display: none; /* Hide the default down arrow */
}

::ng-deep .mat-expansion-panel-header.mat-expanded {
  padding: 8px 16px; /* Adjust padding as needed */
  background-color: #e63232; /* Customize the background color */
  border-radius: 4px; /* Add rounded corners */
  border: 1px solid #ccc; /* Add border */
}

::ng-deep .mat-expansion-panel-header:hover {
  background-color: #800000; /* Change background color on hover */
}

::ng-deep .mat-expansion-panel-content {
  padding: 16px; /* Adjust padding as needed */
}
    
  
    
  `]
  
})


export class MenuComponent implements OnInit {
  isExpanded = false;


  headerDropdowns$!: Observable<Dropdown_ResponseDTO[] | null>

  constructor(private homeService : HomeService,private toastr: ToastrService) {}
  ngOnInit(): void {


    this.homeService.GetAllHeaderDropdown().pipe(
      tap(response => {
        this.headerDropdowns$ = of(response.payload)
        console.log('Response from GetAllHeaderDropdown:', response.payload);
    
        }
        ),
     
    ).subscribe();
   
  }

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
