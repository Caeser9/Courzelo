import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './shared/home/home.component';
import { AddBlogComponent } from './Blog/add-blog/add-blog.component';
import { ListBlogComponent } from './Blog/list-blog/list-blog.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BlogService } from './Blog/BlogService/blog.service';
import { UploadFileComponent } from './Blog/upload-file/upload-file.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { UpdateBlogComponent } from './Blog/update-blog/update-blog.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AddBlogComponent,
    ListBlogComponent,
    UserDashboardComponent,
    UploadFileComponent,
    UpdateBlogComponent,    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CKEditorModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
