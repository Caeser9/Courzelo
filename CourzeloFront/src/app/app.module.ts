import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './core/front-office/Formateur-Admin/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './core/front-office/Formateur-Admin/register/register.component';
import { EditProfileComponent } from './core/back-office/User/edit-profile/edit-profile.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { AdminListComponent } from './core/back-office/User/admin-list/admin-list.component';
import { StudentListComponent } from './core/back-office/User/student-list/student-list.component';
import { AddProfileComponent } from './core/back-office/User/add-profile/add-profile.component';
import { TwoWayFactorPageComponent } from './core/front-office/two-way-factor-page/two-way-factor-page.component';
import { FormateurListComponent } from './core/back-office/User/formateur-list/formateur-list.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    EditProfileComponent,
    SideBarComponent,
    StudentListComponent,
    AdminListComponent,
    AddProfileComponent,
    TwoWayFactorPageComponent,
    FormateurListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule

    
  ],
  providers: [ 
],
  bootstrap: [AppComponent]
})
export class AppModule { }
