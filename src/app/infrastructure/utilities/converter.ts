import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
  export class Converter {
    convertDtoToFormData<T>(dto: T): FormData {
      const formData = new FormData();
  
      for (const key in dto) {
        if (dto[key] !== null && dto[key] !== undefined) {
          const value = dto[key];
  
          if (value instanceof File) {
            formData.append(key, value);
          } else {
            formData.append(key, value as string);
          }
        }
      }
  
      return formData;
    }
  }
  