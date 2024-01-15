import { Component } from '@angular/core';
import { Observable, Subscription, tap, of } from 'rxjs';
import { ServiceResponse } from 'src/app/domain/shared/client/serviceResponse';
import { TopProductsResponseDTO } from 'src/app/domain/shared/proizvodi/topProducts_ResponseDTO';
import { ProizvodiService } from 'src/app/presentation/services/proizvodi/proizvodi.service';


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
    this.topProductsSub?.unsubscribe();
  }

  private handleTopProductsResponse(userResponse: ServiceResponse<TopProductsResponseDTO>) {
    console.log(userResponse.payload)
    this.topProducts$ = of(userResponse.payload);
  }
}
