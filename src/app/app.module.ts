import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { FormioModule, FormioAppConfig } from 'angular-formio';
import { AppConfig } from "./formio-config";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthGuardService } from './app.guard';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HeaderComponent } from './website/header/header.component';
import { FooterComponent } from './website/footer/footer.component';
import { HomeComponent } from './website/home/home.component';
import { PricingComponent } from './website/pricing/pricing.component';
import { ContactComponent } from './website/contact/contact.component';
import { DashboardComponent } from './protected/dashboard/dashboard.component';
import { FormbuilderComponent } from './protected/formbuilder/formbuilder.component';
import { SidenavComponent } from './protected/sidenav/sidenav.component';
import { PheaderComponent } from './protected/pheader/pheader.component';

// const Formio = require('formiojs').Formio;
// Formio.icons = 'fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PricingComponent,
    ContactComponent,
    DashboardComponent,
    FormbuilderComponent,
    SidenavComponent,
    PheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormioModule,
    NgbModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    AuthGuardService,
    { provide: FormioAppConfig, useValue: AppConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
