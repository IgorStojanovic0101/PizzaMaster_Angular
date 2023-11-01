import { Injectable } from '@angular/core';
import { Admin_RequestDTO } from 'src/app/shared/admin/admin_RequestDTO';
import { MasterService } from '../master/master.service';
import { ServiceResponse } from 'src/app/shared/client/serviceResponse';
import { Admin_ResponseDTO } from 'src/app/shared/admin/admin_ResponseDTO';

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
