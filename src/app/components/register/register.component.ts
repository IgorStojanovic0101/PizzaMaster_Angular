import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { of, switchMap } from 'rxjs';
import { MasterService } from 'src/app/services/master/master.service';
import { UserService } from 'src/app/services/user/user.service';
import { ServiceResponse } from 'src/app/shared/client/serviceResponse';
import { UserLoginRequestDTO } from 'src/app/shared/user/userLoginRequestDTO';
import { UserLoginResponseDTO } from 'src/app/shared/user/userLoginResponseDTO';
import { UserRegisterRequestDTO } from 'src/app/shared/user/userRegisterRequestDTO';
import { UserRegisterResponseDTO } from 'src/app/shared/user/userRegisterResponseDTO';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  RegistrationForm:any =  FormGroup;

  constructor(private userService:UserService,private fb:FormBuilder, private router:Router, private commServ:MasterService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.RegistrationForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],


  
      });
  }

  get f() { return this.RegistrationForm.controls; }

  onSubmit() {
    debugger;

    if (this.RegistrationForm.valid) {
      const formData: UserRegisterRequestDTO = {
        username: this.RegistrationForm.get('username').value,
        password: this.RegistrationForm.get('password').value,
        name: this.RegistrationForm.get('name').value,
        email: this.RegistrationForm.get('email').value

      };
  
      
      this.userService.UserRegister(formData).pipe(
        switchMap((response: ServiceResponse<UserRegisterResponseDTO>) => {
          if (!response) {
            return of(null);
          }
      
          if (!response.validation) {
            this.toastr.success('Uspesno');
          } else {
            this.toastr.warning('Validacija', response.errors.join('\n'));
          }
      
          return of(response);
        })
      ).subscribe();
    }
  
  }
}
