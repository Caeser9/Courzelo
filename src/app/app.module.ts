import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './shared/home/home.component';
import { CourseListComponent } from './cour/course-list/course-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCourseComponent } from './cour/add-course/add-course.component';
import { FormsModule } from '@angular/forms';
import { CourseDeleteComponent } from './cour/course-delete/course-delete.component';
import { CourseUpdateComponent } from './cour/course-update/course-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CourseListComponent,
    AddCourseComponent,
    CourseDeleteComponent,
    CourseUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
