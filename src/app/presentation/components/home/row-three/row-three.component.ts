import { Component } from '@angular/core';
import { Observable, Subscription, of, tap } from 'rxjs';
import { ServiceResponse } from 'src/app/domain/shared/client/serviceResponse';
import { UserResponseDTO } from 'src/app/domain/shared/user/user_ResponseDTO';
import { UserService } from 'src/app/presentation/services/user/user.service';


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
    this.topUserSub?.unsubscribe();
  }

  private handleTopUsersResponse(userResponse: ServiceResponse<UserResponseDTO[]>) {
    console.log(userResponse.payload)
    this.topUsers$ = of(userResponse.payload);
  }
}
