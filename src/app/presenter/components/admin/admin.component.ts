import { Component, ElementRef, ViewChild } from '@angular/core';
import { Admin_RequestDTO } from 'src/app/domain/shared/admin/admin_RequestDTO';
import { Converter } from 'src/app/infrastructure/utilities/converter';
import { AdminService } from '../../services/admin/admin.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  additionalData = { text: '' };

  @ViewChild('imagePreview') imagePreview!: ElementRef;

  base64!: string;
  fajl!: File;

  constructor(public service: AdminService,private converter: Converter) {}

  CategoryImageUpload(event: any) {
    const categoryfileSelected: File = event.target.files[0];
    this.fajl = categoryfileSelected;

    this.convertFileToBase64(categoryfileSelected);
  }

  convertFileToBase64(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.readFile(file).then((base64) => {
        
        this.imagePreview.nativeElement.src = base64;
        this.base64 = base64;
        console.log(this.base64)

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
  uploadImage() {
    debugger;
    console.log("FAJL",this.fajl )
    let productUpload:Admin_RequestDTO =  {
      imageFile: this.fajl,
      text: this.additionalData.text,
    };   
    const formDataNew = this.converter.convertDtoToFormData(productUpload);

    // const formData = new FormData();
    // formData.append('imageFile', this.fajl);
    // formData.append('text', this.additionalData.text); // Example additional data

    // console.log(formData)
    console.log(formDataNew)

     
     this.service.SetAdminData(formDataNew);

  }

}
