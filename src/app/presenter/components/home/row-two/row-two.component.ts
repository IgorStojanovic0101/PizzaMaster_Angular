import { Component } from '@angular/core';
import { Observable, Subscription, tap, of } from 'rxjs';
import { ServiceResponse } from 'src/app/domain/shared/client/serviceResponse';
import { HomeDescriptionResponseDTO } from 'src/app/domain/shared/home/homeDescription_ResponseDTO';
import { HomeService } from 'src/app/presenter/services/home/home.service';


@Component({
  selector: 'app-row-two',
  templateUrl: './row-two.component.html',
  styleUrls: ['./row-two.component.css']
})
export class RowTwoComponent {


  homeDesc$!: Observable<HomeDescriptionResponseDTO[]>;

  private homeDescSub!: Subscription;

  constructor(public service : HomeService) {}

  
  ngOnInit(): void {

    this.homeDescSub = this.service.GetHomeDescription().pipe(
      tap((response:ServiceResponse<HomeDescriptionResponseDTO[]>) => this.handleHomeDescResponse(response))
      ).subscribe();

  }
  ngOnDestroy() {
    console.log("Unsubscribed!")
    this.homeDescSub.unsubscribe();
  }

  private handleHomeDescResponse(userResponse: ServiceResponse<HomeDescriptionResponseDTO[]>) {
    console.log(userResponse.payload)
    this.homeDesc$ = of(userResponse.payload);
  }




  title1 = 'Title 1';
  text1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  title2 = 'Title 2';
  text2 = 'Nulla eget eros in lacus tincidunt fermentum ac nec justo.';
  title3 = 'Title 3';
  text3 = 'Suspendisse efficitur vel urna eu dignissim.';
  title4 = 'Title 4';
  text4 = 'Cras feugiat libero nec rhoncus.';
}
