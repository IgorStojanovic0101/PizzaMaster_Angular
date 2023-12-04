import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, share, tap } from 'rxjs';

import { MasterService } from '../master/master.service';
import { ServiceResponse } from 'src/app/domain/shared/client/serviceResponse';
import { HomeDescriptionResponseDTO } from 'src/app/domain/shared/home/homeDescription_ResponseDTO';
import { RestoranResponseDTO } from 'src/app/domain/shared/restoran/restoranResponseDTO';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private restoranSource = new BehaviorSubject<ServiceResponse<RestoranResponseDTO[]> | null >(null);
  restoran$ = this.restoranSource.asObservable();

  private homeDescSource = new BehaviorSubject<ServiceResponse<HomeDescriptionResponseDTO[]> | null >(null);
  homeDesc$ = this.homeDescSource.asObservable();
  
  private videoSource = new BehaviorSubject<ServiceResponse<string> | null >(null);
  video$ = this.homeDescSource.asObservable();

  constructor(private service: MasterService) { }

  GetAllRestorans() : Observable<ServiceResponse<RestoranResponseDTO[]>> 
  {
    return this.service.GetAllRestorans().pipe(
      tap(resp => this.restoranSource.next(resp))
    );
    
  }

  GetHomeDescription() : Observable<ServiceResponse<HomeDescriptionResponseDTO[]>> 
  {
    return this.service.GetHomeDescription().pipe(
      tap(resp => this.homeDescSource.next(resp))
    );
    
  }

  GetVideo(): Observable<ServiceResponse<string>>
  {
    return this.service.GetVideo().pipe(
      tap(resp => this.videoSource.next(resp))
    );
    
  }

  

 
}
