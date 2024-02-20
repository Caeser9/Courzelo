import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './shared/home/home.component';
import { CourseListComponent } from './cour/course-list/course-list.component';
import { AddCourseComponent } from './cour/add-course/add-course.component';
import { CourseDeleteComponent } from './cour/course-delete/course-delete.component';
import { CourseUpdateComponent } from './cour/course-update/course-update.component';
import { StripeComponent } from './cour/stripe/stripe.component';
import { AddRessourceComponent } from './cour/add-ressource/add-ressource.component';

const routes: Routes = [
  {path:"courselist",component:CourseListComponent},
  {path:"add-course",component:AddCourseComponent},
  {path:"delete-course",component:CourseDeleteComponent},
  {path:"course-update/:id",component:CourseUpdateComponent},
  {path:"course-stripe" ,component:StripeComponent},
  {path:"add-ressource/:id" ,component:AddRessourceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
