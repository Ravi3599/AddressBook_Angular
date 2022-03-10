import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './MyComponents/dashboard/dashboard.component';
import { DeveloperdetailsComponent } from './MyComponents/developerdetails/developerdetails.component';
import { FormComponent } from './MyComponents/form/form.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { InfoComponent } from './MyComponents/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    FormComponent,
    InfoComponent,
    DeveloperdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
