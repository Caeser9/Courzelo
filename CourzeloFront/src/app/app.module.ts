import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './shared/home/home.component';
import { AddFaculteComponent } from './Faculte/add-faculte/add-faculte.component';
import { EditFaculteComponent } from './Faculte/edit-faculte/edit-faculte.component';
import { DeleteFaculteComponent } from './Faculte/delete-faculte/delete-faculte.component';
import { FaculteListComponent } from './Faculte/faculte-list/faculte-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';
import { AddPoleComponent } from './Pole/add-pole/add-pole.component';
import { DeletePoleComponent } from './Pole/delete-pole/delete-pole.component';
import { UpdatePoleComponent } from './Pole/update-pole/update-pole.component';
import { PoleListComponent } from './Pole/pole-list/pole-list.component';
import { UploadFileComponent } from './Faculte/upload-file/upload-file.component';
import { UploadFilePoleComponent } from './Pole/upload-file-pole/upload-file-pole.component';
  

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AddFaculteComponent,
    EditFaculteComponent,
    DeleteFaculteComponent,
    FaculteListComponent,
    AddPoleComponent,
    DeletePoleComponent,
    UpdatePoleComponent,
    PoleListComponent,
    UploadFileComponent,
    UploadFilePoleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
