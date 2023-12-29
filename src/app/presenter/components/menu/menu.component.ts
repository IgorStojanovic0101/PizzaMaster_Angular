import { Component, HostListener, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { ToastrService } from 'ngx-toastr';
import { Observable, of, switchMap, tap } from 'rxjs';
import { Dropdown_ResponseDTO } from 'src/app/domain/shared/dropdown/dropdown_ResponseDTO';
import { HomeService } from '../../services/home/home.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],


})


export class MenuComponent implements OnInit {
  isExpanded = false;
  @Input() isDrawerOpen = false;


  headerDropdowns$!: Observable<Dropdown_ResponseDTO[] | null>

  constructor(private homeService : HomeService,private toastr: ToastrService) {}

  @ViewChild('drawer') drawer: MatDrawer | undefined;


  ngOnChanges(changes: any): void {
    console.log("triggered")
    // Detect changes in isDrawerOpen input and toggle the drawer accordingly
    if (changes.isDrawerOpen && this.drawer) {
      if (changes.isDrawerOpen.currentValue !== this.isExpanded) {
        this.toggleDrawer();
      }
    }
  }

  ngOnInit(): void {


    this.homeService.GetAllHeaderDropdown().pipe(
      tap(response => {
        this.headerDropdowns$ = of(response.payload)
        console.log('Response from GetAllHeaderDropdown:', response.payload);
    
        }
        ),
     
    ).subscribe();
   
  }


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
