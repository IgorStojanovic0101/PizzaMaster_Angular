import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ToastrService } from 'ngx-toastr';
import { Observable, of, switchMap, tap } from 'rxjs';
import { HomeService } from 'src/app/services/home/home.service';
import { ServiceResponse } from 'src/app/shared/client/serviceResponse';
import { RestoranResponseDTO } from 'src/app/shared/restoran/restoranResponseDTO';

@Component({
  selector: 'app-menu-bar-toolbar',
  templateUrl: './menu-bar-toolbar.component.html',
  styleUrls: ['./menu-bar-toolbar.component.css']
})
export class MenuBarToolbarComponent {

  opened = false;
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  restorans$!:Observable<RestoranResponseDTO[] | null>;

  constructor(private homeService : HomeService,private toastr: ToastrService) {}

  ngOnInit(): void {
   
   this.homeService.GetAllRestorans().pipe(
       tap((response =>this.restorans$ = of(response.payload))),
     
    ).subscribe();

  }
  stopSliding()
  {
    this.opened=!this.opened;
    //console.log("Stop Sliding event");
    //this.authome.ShowDownEvent();
  }

  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }

  @Output() triggerParent = new EventEmitter<void>();

  triggerParentFunction() {
    this.triggerParent.emit();
  }

  
}
