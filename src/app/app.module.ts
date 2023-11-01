import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
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
import { RowOneComponent } from './components/home/row-one/row-one.component';
import { RowTwoComponent } from './components/home/row-two/row-two.component';
import { RowThreeComponent } from './components/home/row-three/row-three.component';
import { RowFourComponent } from './components/home/row-four/row-four.component';
import { RowFiveComponent } from './components/home/row-five/row-five.component';
import { RowSixComponent } from './components/home/row-six/row-six.component';
import { FooterComponent } from './components/menu-bar/footer/footer.component';
import { RestoranComponent } from './components/restoran/restoran.component';
import { LoaderInterceptor } from './infrastructure/interceptors/loader.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";
import { AdminComponent } from './components/admin/admin.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuBarComponent,
    MenuBarComponent,
    HomeComponent,
    MenuBarToolbarComponent,
    RowOneComponent,
    RowTwoComponent,
    RowThreeComponent,
    RowFourComponent,
    RowFiveComponent,
    RowSixComponent,
    FooterComponent,
    RestoranComponent,
    AdminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(), // ToastrModule added
    FormsModule,    
    ReactiveFormsModule,
    NgxSpinnerModule,
  

  
    
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
    },
    { provide: HTTP_INTERCEPTORS, 
      useClass: LoaderInterceptor, 
      multi: true 
    }

  ],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class AppModule { }
