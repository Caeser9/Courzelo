import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './shared/home/home.component';
import { QuestionListComponent } from './Question/question-list/question-list.component';

const routes: Routes = [
  {path:"navbar",component:NavbarComponent},
  {path:"home",component:HomeComponent},
  {path:"question-list",component:QuestionListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
