import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  private currentLanguageSubject = new BehaviorSubject<string>('en-US');
  currentLanguage$ = this.currentLanguageSubject.asObservable();

  setLanguage(language: string) {
    this.currentLanguageSubject.next(language);
  }
}
