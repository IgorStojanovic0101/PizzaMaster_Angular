import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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

export class AppComponent {
  title = 'PizzaMaster';
  isExpanded = false;


  toggleDrawer() {
  
      this.isExpanded = !this.isExpanded;

      }
    
}


