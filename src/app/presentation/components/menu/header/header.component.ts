import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable} from 'rxjs';
import { Dropdown_ResponseDTO } from 'src/app/domain/shared/dropdown/dropdown_ResponseDTO';
import { RestoranResponseDTO } from 'src/app/domain/shared/restoran/restoranResponseDTO';
import { HomeService } from 'src/app/presentation/services/home/home.service';

import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IAuthData } from 'src/app/domain/shared/authData/IAuthData';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  restorans$!:Observable<RestoranResponseDTO[] | null>;
  headerDropdowns$!: Observable<Dropdown_ResponseDTO[] | null>
  authData$!:Observable<IAuthData | null>

  constructor(private homeService : HomeService,private toastr: ToastrService,private router:Router) {}

  ngOnInit(): void {
   
    // this.localizationService.currentLanguage$.subscribe((language) => {
    //   console.log(language)
    //  // this.translate.use(language);
    // });
   this.homeService.GetAllRestorans().pipe(
       tap((response =>this.restorans$ = of(response.payload))),
     
    ).subscribe();

    this.homeService.GetAllHeaderDropdown().pipe(
      tap(response => {
        this.headerDropdowns$ = of(response.payload)
        console.log('Response from GetAllHeaderDropdown:', response.payload);
        }
     ),
     
    ).subscribe();

    this.homeService.getUsernameFromToken().pipe(
      tap((response =>this.authData$ = of(response))),
    
   ).subscribe();

  }

  login()
  {
    this.router.navigate(['auth']);

  }


  switchLanguage(language: string) {
    //this.localizationService.setLanguage(language);
  }
  logOut()
  {
    localStorage.removeItem('token');

    this.router.navigate(['auth/login']);

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
