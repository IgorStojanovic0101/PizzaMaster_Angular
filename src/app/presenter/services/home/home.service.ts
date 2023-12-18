import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, share, tap } from 'rxjs';

import { MasterService } from '../../../infrastructure/shared/master/master.service';
import { ServiceResponse } from 'src/app/domain/shared/client/serviceResponse';
import { HomeDescriptionResponseDTO } from 'src/app/domain/shared/home/homeDescription_ResponseDTO';
import { RestoranResponseDTO } from 'src/app/domain/shared/restoran/restoranResponseDTO';
import { Dropdown_ResponseDTO } from 'src/app/domain/shared/dropdown/dropdown_ResponseDTO';
import { IAuthData } from 'src/app/domain/shared/authData/IAuthData';
import * as jwt_decode from 'jwt-decode';

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

  private headerDropdownSource = new BehaviorSubject<ServiceResponse<Dropdown_ResponseDTO[]> | null>(null)
  headerDropdown$ = this.headerDropdownSource.asObservable();

  private authDataSource = new BehaviorSubject<IAuthData | null>(null)
  authData$ = this.authDataSource.asObservable();

  constructor(private service: MasterService) { }

  GetAllRestorans() : Observable<ServiceResponse<RestoranResponseDTO[]>> 
  {
    return this.service.GetAllRestorans().pipe(
      tap(resp => this.restoranSource.next(resp))
    );
    
  }

  getUsernameFromToken(): Observable<IAuthData | null> {
    const token = localStorage.getItem('token');
    
    if (token) {
      try {
        const decodedToken: any = jwt_decode.jwtDecode(token);
        const name = decodedToken
          ? decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']
          : null;
        console.log("name iz token",name)
        // Update authDataSource with the obtained username
        this.authDataSource.next({ username: name });
  
        // Return the obtained name as an observable
        return of({ username: name });
      } catch (error) {
        console.error('Error decoding JWT token:', error);
        // Return null as an observable in case of an error
        return of(null);
      }
    }
  
    // Return null as an observable if no token is found
    return of(null);
  }
  GetAllHeaderDropdown() : Observable<ServiceResponse<Dropdown_ResponseDTO[]>>
  {
    return this.service.GetAllHeaderDropdowns().pipe(
      tap(resp => {
        this.headerDropdownSource.next(resp);
      })
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
