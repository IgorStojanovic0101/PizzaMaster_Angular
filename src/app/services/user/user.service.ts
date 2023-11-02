import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { MasterService } from '../master/master.service';
import { UserLoginResponseDTO } from 'src/app/shared/user/userLoginResponseDTO';
import { UserRegisterResponseDTO } from 'src/app/shared/user/userRegisterResponseDTO';
import { UserLoginRequestDTO } from 'src/app/shared/user/userLoginRequestDTO';
import { UserRegisterRequestDTO } from 'src/app/shared/user/userRegisterRequestDTO';
import { ServiceResponse } from 'src/app/shared/client/serviceResponse';
import { UserResponseDTO } from 'src/app/shared/user/user_ResponseDTO';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  private userLoginSource = new BehaviorSubject<ServiceResponse<UserLoginResponseDTO> | null >(null);
  user$ = this.userLoginSource.asObservable();

  private userRegisterSource =  new BehaviorSubject<ServiceResponse<UserRegisterResponseDTO> | null >(null);
  register$ = this.userRegisterSource.asObservable();

  private topUsersSource =  new BehaviorSubject<ServiceResponse<UserResponseDTO[]> | null >(null);
  topUsers$ = this.topUsersSource.asObservable();

  constructor(private service:MasterService) { }

  UserLogin(val: UserLoginRequestDTO): Observable<ServiceResponse<UserLoginResponseDTO>> {
    return this.service.login(val).pipe(
      tap(resp => this.userLoginSource.next(resp))
    );
  }
  
  UserRegister(val: FormData): Observable<ServiceResponse<UserRegisterResponseDTO>> {
    return this.service.register(val).pipe(
      tap(resp => this.userRegisterSource.next(resp))
    );
  }

  GetTopUsers(): Observable<ServiceResponse<UserResponseDTO[]>> {
    return this.service.GetTopUsers().pipe(
      tap(resp => this.topUsersSource.next(resp))
    );
  }

  DestroyUsers()
  {
    this.userLoginSource.next(null);
    this.userRegisterSource.next(null);

  }
 
}
