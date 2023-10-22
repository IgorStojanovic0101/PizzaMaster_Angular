import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ServiceResponse } from 'src/app/shared/client/serviceResponse';
import { RestoranResponseDTO } from 'src/app/shared/restoran/restoranResponseDTO';
import { MasterService } from '../master/master.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private restoranSource = new BehaviorSubject<ServiceResponse<RestoranResponseDTO[]> | null >(null);
  restoran$ = this.restoranSource.asObservable();
  
  constructor(private service: MasterService) { }

  GetAllRestorans() : Observable<ServiceResponse<RestoranResponseDTO[]>> 
  {
    return this.service.GetAllRestorans<RestoranResponseDTO[]>().pipe(
      tap(resp => this.restoranSource.next(resp))
    );
  }

 
}
