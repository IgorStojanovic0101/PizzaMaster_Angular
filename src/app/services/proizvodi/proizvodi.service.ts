import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ServiceResponse } from 'src/app/shared/client/serviceResponse';
import { PastaType_ResponseDTO } from 'src/app/shared/proizvodi/pastaType_ResponseDTO';
import { PizzaType_ResponseDTO } from 'src/app/shared/proizvodi/pizzaType_ResponseDTO';
import { UserResponseDTO } from 'src/app/shared/user/user_ResponseDTO';
import { MasterService } from '../master/master.service';
import { TopProductsResponseDTO } from 'src/app/shared/proizvodi/topProducts_ResponseDTO';

@Injectable({
  providedIn: 'root'
})
export class ProizvodiService {

  private pizzaTypeSource =  new BehaviorSubject<ServiceResponse<PizzaType_ResponseDTO[]> | null >(null);
  pizzaType$ = this.pizzaTypeSource.asObservable();

  private pastaTypeSource =  new BehaviorSubject<ServiceResponse<PastaType_ResponseDTO[]> | null >(null);
  pastaType$ = this.pastaTypeSource.asObservable();
  
  private topProductsSource =  new BehaviorSubject<ServiceResponse<TopProductsResponseDTO> | null >(null);
  topProducts$ = this.pastaTypeSource.asObservable();

  constructor(private service:MasterService) { }

  GetPizzaTypes(): Observable<ServiceResponse<PizzaType_ResponseDTO[]>> {
    return this.service.GetPizzaTypes().pipe(
      tap(resp => this.pizzaTypeSource.next(resp))
    );
  }
   GetPastaTypes(): Observable<ServiceResponse<PastaType_ResponseDTO[]>> {
      return this.service.GetPastaTypes().pipe(
      tap(resp => this.pastaTypeSource.next(resp))
    );
  }

  GetTopProducts(): Observable<ServiceResponse<TopProductsResponseDTO>> {
    return this.service.GetTopProducts().pipe(
    tap(resp => this.topProductsSource.next(resp))
  );
}

}
