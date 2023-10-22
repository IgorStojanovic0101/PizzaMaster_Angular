import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterService } from './services/master/master.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MenuBarComponent } from './components/menu-bar/menu-bar';
import { TokenInterceptor } from './infrastructure/interceptors/token-interceptor.interceptor';
import { ErrorInterceptor } from './infrastructure/interceptors/error.interceptor';
import { HomeComponent } from './components/home/home.component';
import { MenuBarToolbarComponent } from './components/menu-bar/menu-bar-toolbar/menu-bar-toolbar.component';
import { BootstrapModule } from './modules/bootstrap/bootstrap.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuBarComponent,
    MenuBarComponent,
    HomeComponent,
    MenuBarToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(), // ToastrModule added
    FormsModule,    
    ReactiveFormsModule,
    
    //-------
    MaterialModule,
    BootstrapModule
  ],
  providers: [
    MasterService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
