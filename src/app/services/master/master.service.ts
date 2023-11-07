import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLoginRequestDTO } from 'src/app/shared/user/userLoginRequestDTO';
import { UserLoginResponseDTO } from 'src/app/shared/user/userLoginResponseDTO';
import { UserRegisterResponseDTO } from 'src/app/shared/user/userRegisterResponseDTO';
import { UserRegisterRequestDTO } from 'src/app/shared/user/userRegisterRequestDTO';
import { URLs } from 'src/app/infrastructure/urls';
import { ServiceResponse } from 'src/app/shared/client/serviceResponse';
import { Admin_RequestDTO } from 'src/app/shared/admin/admin_RequestDTO';
import { Admin_ResponseDTO } from 'src/app/shared/admin/admin_ResponseDTO';
import { RestoranResponseDTO } from 'src/app/shared/restoran/restoranResponseDTO';
import { HomeDescriptionResponseDTO } from 'src/app/shared/home/homeDescription_ResponseDTO';
import { UserResponseDTO } from 'src/app/shared/user/user_ResponseDTO';
import { PizzaType_ResponseDTO } from 'src/app/shared/proizvodi/pizzaType_ResponseDTO';
import { PastaType_ResponseDTO } from 'src/app/shared/proizvodi/pastaType_ResponseDTO';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }




  login(dto: UserLoginRequestDTO): Observable<ServiceResponse<UserLoginResponseDTO>> {
    const formData = new FormData();
    formData.append('username', dto.username);
    formData.append('password', dto.password);

    return this.http.post<ServiceResponse<UserLoginResponseDTO>>(URLs.User.Login, formData);
  }

  register(formData: FormData): Observable<ServiceResponse<UserRegisterResponseDTO>> {
    return this.http.post<ServiceResponse<UserRegisterResponseDTO>>(URLs.User.Register, formData);
  }

  
  GetAllRestorans(): Observable<ServiceResponse<RestoranResponseDTO[]>> {
    return this.http.get<ServiceResponse<RestoranResponseDTO[]>>(URLs.Restoran.ListaRestorana);
  }

  SetAdminImport<Admin_ResponseDTO>(val: FormData): Observable<ServiceResponse<Admin_ResponseDTO>> {
    const headers = new HttpHeaders();
    //headers.append('Content-Type', 'multipart/form-data');
    return this.http.post<ServiceResponse<Admin_ResponseDTO>>(URLs.Admin.SetAdminData,val);
  }

  GetHomeDescription():Observable<ServiceResponse<HomeDescriptionResponseDTO[]>>
  {
    return this.http.get<ServiceResponse<HomeDescriptionResponseDTO[]>>(URLs.Home.GetHomeDescription);
  }

  GetTopUsers():Observable<ServiceResponse<UserResponseDTO[]>>
  {
    return this.http.get<ServiceResponse<UserResponseDTO[]>>(URLs.User.GetTopUsers);
  }

   GetPizzaTypes():Observable<ServiceResponse<PizzaType_ResponseDTO[]>>
  {
    return this.http.get<ServiceResponse<PizzaType_ResponseDTO[]>>(URLs.Proizvodi.GetPizzaTypes);
  }

  GetPastaTypes():Observable<ServiceResponse<PastaType_ResponseDTO[]>>
  {
    return this.http.get<ServiceResponse<PastaType_ResponseDTO[]>>(URLs.Proizvodi.GetPastaTypes);
  }

  GetVideo():Observable<ServiceResponse<string>>
  {
    return this.http.get<ServiceResponse<string>>(URLs.Home.GetVideo);
  }
}
