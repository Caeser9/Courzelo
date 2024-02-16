import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './shared/home/home.component';
import { CourseListComponent } from './cour/course-list/course-list.component';
import { AddCourseComponent } from './cour/add-course/add-course.component';

const routes: Routes = [
  {path:"courselist",component:CourseListComponent},
  {path:"add-course",component:AddCourseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
