import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './shared/home/home.component';
import { QuestionListComponent } from './Question/question-list/question-list.component';
import { AddQuestionComponent } from './Question/add-question/add-question.component';
import { UpdateQuestionComponent } from './Question/update-question/update-question.component';
import { DeleteQuestionComponent } from './Question/delete-question/delete-question.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    QuestionListComponent,
    AddQuestionComponent,
    UpdateQuestionComponent,
    DeleteQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
