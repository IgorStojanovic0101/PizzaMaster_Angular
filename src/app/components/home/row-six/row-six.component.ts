import { Component } from '@angular/core';
import { Observable, Subscription, tap, of } from 'rxjs';
import { HomeService } from 'src/app/services/home/home.service';
import { ProizvodiService } from 'src/app/services/proizvodi/proizvodi.service';
import { ServiceResponse } from 'src/app/shared/client/serviceResponse';
import { HomeDescriptionResponseDTO } from 'src/app/shared/home/homeDescription_ResponseDTO';
import { TopProductsResponseDTO } from 'src/app/shared/proizvodi/topProducts_ResponseDTO';

@Component({
  selector: 'app-row-six',
  templateUrl: './row-six.component.html',
  styleUrls: ['./row-six.component.css']
})
export class RowSixComponent {

  topProducts$!: Observable<TopProductsResponseDTO>;

  private topProductsSub!: Subscription;

  constructor(public service : ProizvodiService) {}

  
  ngOnInit(): void {

    this.topProductsSub = this.service.GetTopProducts().pipe(
      tap((response:ServiceResponse<TopProductsResponseDTO>) => this.handleTopProductsResponse(response))
      ).subscribe();

  }
  ngOnDestroy() {
    console.log("Unsubscribed!")
    this.topProductsSub.unsubscribe();
  }

  private handleTopProductsResponse(userResponse: ServiceResponse<TopProductsResponseDTO>) {
    console.log(userResponse.payload)
    this.topProducts$ = of(userResponse.payload);
  }
}
