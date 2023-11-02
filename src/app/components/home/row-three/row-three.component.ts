import { Component } from '@angular/core';
import { Observable, Subscription, of, tap } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';
import { ServiceResponse } from 'src/app/shared/client/serviceResponse';
import { HomeDescriptionResponseDTO } from 'src/app/shared/home/homeDescription_ResponseDTO';
import { UserResponseDTO } from 'src/app/shared/user/user_ResponseDTO';

@Component({
  selector: 'app-row-three',
  templateUrl: './row-three.component.html',
  styleUrls: ['./row-three.component.css']
})
export class RowThreeComponent {
  
  topUsers$!: Observable<UserResponseDTO[]>;

  private topUserSub!: Subscription;

  constructor(public service : UserService) {}

  
  ngOnInit(): void {

    this.topUserSub = this.service.GetTopUsers().pipe(
      tap((response:ServiceResponse<UserResponseDTO[]>) => this.handleTopUsersResponse(response))
      ).subscribe();

  }
  ngOnDestroy() {
    console.log("Unsubscribed!")
    this.topUserSub.unsubscribe();
  }

  private handleTopUsersResponse(userResponse: ServiceResponse<UserResponseDTO[]>) {
    console.log(userResponse.payload)
    this.topUsers$ = of(userResponse.payload);
  }
}
