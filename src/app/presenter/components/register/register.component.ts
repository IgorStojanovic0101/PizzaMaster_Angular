import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription, of, switchMap } from 'rxjs';
import { ServiceResponse } from 'src/app/domain/shared/client/serviceResponse';
import { UserRegisterRequestDTO } from 'src/app/domain/shared/user/userRegisterRequestDTO';
import { UserRegisterResponseDTO } from 'src/app/domain/shared/user/userRegisterResponseDTO';
import { Converter } from 'src/app/infrastructure/utilities/converter';
import { UserService } from '../../services/user/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  RegistrationForm:any =  FormGroup;
  @ViewChild('imagePreview') imagePreview!: ElementRef;
  private registerSub!: Subscription;

  fajl!: File;

  constructor(private userService:UserService,private fb:FormBuilder, private router:Router, private converter: Converter,private toastr: ToastrService) { }

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
        email: this.RegistrationForm.get('email').value,
        file : this.fajl

      };
      //const formDataNew = this.converter.convertDtoToFormData(formData);
  const formDataNew = new FormData();
  formDataNew.append('username', formData.username);
  formDataNew.append('password', formData.password); // Example additional data
  formDataNew.append('name', formData.name); // Example additional data
  formDataNew.append('email', formData.email); // Example additional data
  formDataNew.append('file', formData.file); // Example additional data

    
    console.log(formDataNew)
      
    this.registerSub = this.userService.UserRegister(formDataNew).pipe(
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
  
  ngOnDestroy() {
    this.registerSub?.unsubscribe();
  }
  
  


  ImageUpload(event: any) {
    this.fajl = File = event.target.files[0];

    this.convertFileToBase64(this.fajl);
  }

  convertFileToBase64(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.readFile(file).then((base64) => {
        
        this.imagePreview.nativeElement.src = base64;
       
        resolve(base64);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  readFile(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.onerror = () => {
        reject(new Error('Failed to read the file.'));
      };
      reader.readAsDataURL(file);
    });
  }
}
