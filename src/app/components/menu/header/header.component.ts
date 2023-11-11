import { Component, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, tap, of } from 'rxjs';
import { HomeService } from 'src/app/services/home/home.service';
import { RestoranResponseDTO } from 'src/app/shared/restoran/restoranResponseDTO';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  restorans$!:Observable<RestoranResponseDTO[] | null>;

  constructor(private homeService : HomeService,private toastr: ToastrService) {}

  ngOnInit(): void {
   
   this.homeService.GetAllRestorans().pipe(
       tap((response =>this.restorans$ = of(response.payload))),
     
    ).subscribe();

  }



  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }

  @Output() triggerParent = new EventEmitter<void>();

  triggerParentFunction() {
    this.triggerParent.emit();
  }

  isExpanded = false;


  toggleExpansion() {
    this.isExpanded = !this.isExpanded;
  }

}
