import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription, map, of, switchMap, tap } from 'rxjs';
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

  LoginForm: FormGroup = new FormGroup({});
  user$!: Observable<UserLoginResponseDTO>;
  usesponse: UserLoginResponseDTO | undefined;

  private heroSub!: Subscription;

  constructor(private userService:UserService,private fb:FormBuilder, private router:Router,private toastr: ToastrService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  }
  ngOnDestroy() {
    this.heroSub?.unsubscribe();
  }
  

  get f() { return this.LoginForm.controls; }

  onSubmit() {
    debugger;

    if (this.LoginForm.valid) {
      const formData: UserLoginRequestDTO = {
        username: this.LoginForm.get('username')!.value,
        password: this.LoginForm.get('password')!.value,
      };
  
      
     

     this.heroSub = this.userService.UserLogin(formData).pipe(
         tap((userResponse:ServiceResponse<UserLoginResponseDTO>) => this.handleUserResponse(userResponse)),
         switchMap((userResponse:ServiceResponse<UserLoginResponseDTO>) => this.handleSwitchMap(userResponse)),
         map((userResponse) => this.transformUserResponse(userResponse))
      ).subscribe();
 
    }

    
  
  }

  goToRegister(){
    this.router.navigate(['/auth/register']);
  }    
  
  transformUserResponse(userResponse: ServiceResponse<UserLoginResponseDTO> | null){
    this.usesponse = userResponse?.payload;

  }

  private handleUserResponse(userResponse: ServiceResponse<UserLoginResponseDTO>) {
    this.user$ = of(userResponse.payload);
  }

  private handleSwitchMap(userResponse: ServiceResponse<UserLoginResponseDTO>) {
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
  }
}