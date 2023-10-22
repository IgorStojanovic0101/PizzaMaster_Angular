import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of, switchMap, tap } from 'rxjs';
import { MasterService } from 'src/app/services/master/master.service';
import { UserService } from 'src/app/services/user/user.service';
import { ServiceResponse } from 'src/app/shared/client/serviceResponse';
import { UserLoginRequestDTO } from 'src/app/shared/user/userLoginRequestDTO';
import { UserLoginResponseDTO } from 'src/app/shared/user/userLoginResponseDTO';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  LoginForm:any =  FormGroup;
  user$!:Observable<ServiceResponse<UserLoginResponseDTO> | null>;

  constructor(private userService:UserService,private fb:FormBuilder, private router:Router, private commServ:MasterService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
  
      });
  }

  get f() { return this.LoginForm.controls; }

  onSubmit() {
    debugger;

    if (this.LoginForm.valid) {
      const formData: UserLoginRequestDTO = {
        username: this.LoginForm.get('username').value,
        password: this.LoginForm.get('password').value,
      };
  
      
     

      this.userService.UserLogin(formData).pipe(
         tap((userResponse) => {
           this.user$ = of(userResponse); 
         }),
        switchMap((userResponse) => {
          if (!userResponse) {
            return of(null);
          }
        
          if (!userResponse.validation) {

            localStorage.setItem('token', userResponse.payload.token);
            
            this.toastr.success('Uspesno');

          } else {
            this.toastr.warning('Validacija', userResponse.errors.join('\n'));
          }
          
          return of(userResponse);
        })
      ).subscribe();

 
    }
  
  }
}