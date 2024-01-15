import { Component, EventEmitter, Output } from '@angular/core';
import { Observable, Subscription, of, tap } from 'rxjs';
import { ServiceResponse } from 'src/app/domain/shared/client/serviceResponse';
import { HomeDescriptionResponseDTO } from 'src/app/domain/shared/home/homeDescription_ResponseDTO';
import { HomeService } from 'src/app/presentation/services/home/home.service';


@Component({
  selector: 'app-row-one',
  templateUrl: './row-one.component.html',
  styleUrls: ['./row-one.component.css']
})
export class RowOneComponent {
  interval:number = 2000;

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
    this.homeDescSub?.unsubscribe();
    
  }

  private handleHomeDescResponse(userResponse: ServiceResponse<HomeDescriptionResponseDTO[]>) {
    console.log(userResponse.payload)
    this.homeDesc$ = of(userResponse.payload);
  }

  @Output() triggerParent = new EventEmitter<void>();

  triggerParentFunction() {
    this.triggerParent.emit();
  }

  reklame = [

    {title: 'First Slide', short: 'First Slide Short', src: "../assets/images/rek6.webp"},
    {title: 'Second Slide', short: 'Second Slide Short', src: "../assets/images/rek2.jpg"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "../assets/images/rek3.jpg"},
    {title: 'Fifth Slide', short: 'Fifth Slide Short', src: "../assets/images/rek5.jpg"},


  ];
}
