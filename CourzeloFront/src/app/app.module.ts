import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './shared/home/home.component';
import { ListDomaineComponent } from './domaine/list-domaine/list-domaine.component';
import { AjoutDomaineComponent } from './ajout-domaine/ajout-domaine.component';
import { DeleteDomaineComponent } from './domaine/delete-domaine/delete-domaine.component';
import { UpdateDomaineComponent } from './domaine/update-domaine/update-domaine.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotoComponent } from './photo/photo.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ListDomaineComponent,
    AjoutDomaineComponent,
    DeleteDomaineComponent,
    UpdateDomaineComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
