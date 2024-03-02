import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './shared/home/home.component';
import { QuestionListComponent } from './Question/question-list/question-list.component';
import { AddQuestionComponent } from './Question/add-question/add-question.component';
import {UpdateQuestionComponent} from './Question/update-question/update-question.component'

const routes: Routes = [
  {path:"navbar",component:NavbarComponent},
  {path:"home",component:HomeComponent},
  {path:"question-list",component:QuestionListComponent},
  {path:"addQuestion",component:AddQuestionComponent},
  {path:"updateQuestion",component:UpdateQuestionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
