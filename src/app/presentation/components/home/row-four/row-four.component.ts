import { Component } from '@angular/core';
import { Observable, Subscription, tap, of, combineLatest, switchMap, forkJoin } from 'rxjs';
import { ServiceResponse } from 'src/app/domain/shared/client/serviceResponse';
import { PastaType_ResponseDTO } from 'src/app/domain/shared/proizvodi/pastaType_ResponseDTO';
import { PizzaType_ResponseDTO } from 'src/app/domain/shared/proizvodi/pizzaType_ResponseDTO';
import { ProizvodiService } from 'src/app/presentation/services/proizvodi/proizvodi.service';


@Component({
  selector: 'app-row-four',
  templateUrl: './row-four.component.html',
  styleUrls: ['./row-four.component.css']
})
export class RowFourComponent {

  paste$!: Observable<PastaType_ResponseDTO[]>;
  pizza$!: Observable<PizzaType_ResponseDTO[]>;


  private pasteSub!: Subscription;
  private pizzaSub!: Subscription;
  private combinedSub!: Subscription;

  constructor(public service : ProizvodiService) {}

  
  // ngOnInit(): void {
  //   combineLatest([
  //     this.service.GetPastaTypes().pipe(
  //       tap((response: ServiceResponse<PastaType_ResponseDTO[]>) => this.handlePasteResponse(response))
  //     ),
  //     this.service.GetPizzaTypes().pipe(
  //       tap((response: ServiceResponse<PizzaType_ResponseDTO[]>) => this.handlePizzaResponse(response))
  //     )
  //   ]).subscribe();
  // }
  
  // ngOnInit(): void {
  //   combineLatest([
  //     this.service.GetPastaTypes(),
  //     this.service.GetPizzaTypes()
  //   ])
  //   .pipe(
  //     tap(([pastaTypes, pizzaTypes]) => {
  //       this.handlePasteResponse(pastaTypes);
  //       this.handlePizzaResponse(pizzaTypes);     
  //     })
  //   )
  //   .subscribe();
  // }


  ngOnInit(): void {
    this.combinedSub = forkJoin(
      this.service.GetPastaTypes().pipe(tap((response) => this.handlePasteResponse(response))),
      this.service.GetPizzaTypes().pipe(tap((response) => this.handlePizzaResponse(response)))
  ).subscribe();
  }

  ngOnDestroy() {
    console.log("Unsubscribed!")
    this.pasteSub?.unsubscribe();
    this.pizzaSub?.unsubscribe();
    this.combinedSub?.unsubscribe();

  }

  private handlePizzaResponse(response: ServiceResponse<PizzaType_ResponseDTO[]>) {
    console.log(response.payload)
    this.pizza$ = of(response.payload);
  }

  private handlePasteResponse(response: ServiceResponse<PastaType_ResponseDTO[]>) {
    console.log(response.payload)
    this.paste$ = of(response.payload);
  }
}




