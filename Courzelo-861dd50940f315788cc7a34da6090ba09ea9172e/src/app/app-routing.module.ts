import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CourseListComponent } from './cour/course-list/course-list.component';
import { AddCourseComponent } from './cour/add-course/add-course.component';
import { CourseDeleteComponent } from './cour/course-delete/course-delete.component';
import { CourseUpdateComponent } from './cour/course-update/course-update.component';
import { StripeComponent } from './cour/stripe/stripe.component';
import { AddRessourceComponent } from './cour/add-ressource/add-ressource.component';
import { RessourceListComponent } from './cour/ressource-list/ressource-list.component';
import { RessourceMaterialsComponent } from './cour/ressource-materials/ressource-materials.component';
import { ListComponent } from './cour/video/list/list.component';
import { ChatComponent } from './cour/chat/chat/chat.component';

const routes: Routes = [
  {path:"courselist",component:CourseListComponent},
  {path:"add-course",component:AddCourseComponent},
  {path:"delete-course",component:CourseDeleteComponent},
  {path:"course-update/:id",component:CourseUpdateComponent},
  {path:"course-stripe/:prix" ,component:StripeComponent},
  {path:"add-ressource/:id" ,component:AddRessourceComponent},
  {path:"ressource-list/:id",component:RessourceListComponent},
  {path:"ressource-materials/:id",component:RessourceMaterialsComponent},
  {path: 'listVideo/:nomVideo', component:ListComponent },
  {path:'chat',component:ChatComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
