import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLoginRequestDTO } from 'src/app/shared/user/userLoginRequestDTO';
import { UserLoginResponseDTO } from 'src/app/shared/user/userLoginResponseDTO';
import { UserRegisterResponseDTO } from 'src/app/shared/user/userRegisterResponseDTO';
import { UserRegisterRequestDTO } from 'src/app/shared/user/userRegisterRequestDTO';
import { URLs } from 'src/app/infrastructure/urls';
import { ServiceResponse } from 'src/app/shared/client/serviceResponse';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }


  UserLogin(val:UserLoginRequestDTO):Observable<UserLoginResponseDTO>{
    return this.http.post<UserLoginResponseDTO>(URLs.User.Login,val);
  }

  login<T>(formData: UserLoginRequestDTO): Observable<ServiceResponse<T>> {
    return this.http.post<ServiceResponse<T>>(URLs.User.Login, formData);
  }
  UserRegister(val:UserRegisterRequestDTO):Observable<UserRegisterResponseDTO>{
    return this.http.post<UserRegisterResponseDTO>(URLs.User.Register,val);
  }
  register<T>(formData: UserRegisterRequestDTO): Observable<ServiceResponse<T>> {
    return this.http.post<ServiceResponse<T>>(URLs.User.Register, formData);
  }


  GetAllRestorans<T>(): Observable<ServiceResponse<T>> {
    return this.http.get<ServiceResponse<T>>(URLs.Restoran.ListaRestorana);
  }

 
}
