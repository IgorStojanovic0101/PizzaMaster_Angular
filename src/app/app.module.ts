import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './infrastructure/interceptors/token-interceptor.interceptor';
import { ErrorInterceptor } from './infrastructure/interceptors/error.interceptor';

import { LoaderInterceptor } from './infrastructure/interceptors/loader.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";
import { BootstrapModule } from './infrastructure/modules/bootstrap/bootstrap.module';
import { AdminComponent } from './presenter/components/admin/admin.component';
import { HomeComponent } from './presenter/components/home/home.component';
import { RowFiveComponent } from './presenter/components/home/row-five/row-five.component';
import { RowFourComponent } from './presenter/components/home/row-four/row-four.component';
import { RowOneComponent } from './presenter/components/home/row-one/row-one.component';
import { RowSixComponent } from './presenter/components/home/row-six/row-six.component';
import { RowThreeComponent } from './presenter/components/home/row-three/row-three.component';
import { RowTwoComponent } from './presenter/components/home/row-two/row-two.component';
import { FooterComponent } from './presenter/components/menu/footer/footer.component';
import { HeaderComponent } from './presenter/components/menu/header/header.component';
import { RestoranComponent } from './presenter/components/restoran/restoran.component';
import { MaterialModule } from './infrastructure/modules/material/material.module';
import { LoginComponent } from './presenter/components/login/login.component';
import { MenuComponent } from './presenter/components/menu/menu.component';
import { RegisterComponent } from './presenter/components/register/register.component';
import { MasterService } from './presenter/services/master/master.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    HomeComponent,
    MenuComponent,
    RowOneComponent,
    RowTwoComponent,
    RowThreeComponent,
    RowFourComponent,
    RowFiveComponent,
    RowSixComponent,
    FooterComponent,
    RestoranComponent,
    AdminComponent,
    HeaderComponent,
    
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
