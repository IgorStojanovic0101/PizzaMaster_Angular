import { Injectable } from '@angular/core';
import { Admin_ResponseDTO } from 'src/app/domain/shared/admin/admin_ResponseDTO';
import { ServiceResponse } from 'src/app/domain/shared/client/serviceResponse';
import { MasterService } from '../master/master.service';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private service: MasterService) { }

  SetAdminData(anyimport:FormData)
  {
    return this.service.SetAdminImport<Admin_ResponseDTO>(anyimport).subscribe((response:ServiceResponse<Admin_ResponseDTO>)=>
    {
      console.log(response);
    })
  }
}
