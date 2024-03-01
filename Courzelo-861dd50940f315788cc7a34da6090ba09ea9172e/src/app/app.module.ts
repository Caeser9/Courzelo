import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CourseListComponent } from './cour/course-list/course-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddCourseComponent } from './cour/add-course/add-course.component';
import { FormsModule } from '@angular/forms';
import { CourseDeleteComponent } from './cour/course-delete/course-delete.component';
import { CourseUpdateComponent } from './cour/course-update/course-update.component';
import { StripeComponent } from './cour/stripe/stripe.component';
import { AddRessourceComponent } from './cour/add-ressource/add-ressource.component';
import { RessourceListComponent } from './cour/ressource-list/ressource-list.component';
import { RessourceMaterialsComponent } from './cour/ressource-materials/ressource-materials.component';
import { ListComponent } from './cour/video/list/list.component';
import { VideoService } from './service/video.service';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import { ChatComponent } from './cour/chat/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CourseListComponent,
    AddCourseComponent,
    CourseDeleteComponent,
    CourseUpdateComponent,
    StripeComponent,
    AddRessourceComponent,
    RessourceListComponent,
    RessourceMaterialsComponent,
    ListComponent,
    ChatComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    
  ],
  providers: [
    VideoService,
    ToastrService,
    //{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
