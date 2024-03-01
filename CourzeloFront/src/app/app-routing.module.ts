import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './shared/home/home.component';
import { AddFaculteComponent } from './Faculte/add-faculte/add-faculte.component';
import { EditFaculteComponent } from './Faculte/edit-faculte/edit-faculte.component';
import { DeleteFaculteComponent } from './Faculte/delete-faculte/delete-faculte.component';
import { FaculteListComponent } from './Faculte/faculte-list/faculte-list.component';
import { UpdatePoleComponent } from './Pole/update-pole/update-pole.component';
import { DeletePoleComponent } from './Pole/delete-pole/delete-pole.component';
import { PoleListComponent } from './Pole/pole-list/pole-list.component';
import { AddPoleComponent } from './Pole/add-pole/add-pole.component';
import { UploadFileComponent } from './Faculte/upload-file/upload-file.component';
import { UploadFilePoleComponent } from './Pole/upload-file-pole/upload-file-pole.component';

const routes: Routes = [
  {path:"navbar",component:NavbarComponent},
  {path:"home",component:HomeComponent},
  { path: '', redirectTo: 'getAllFacultes', pathMatch: 'full' },
  { path: 'getAllFacultes', component: FaculteListComponent },  
  { path: 'addFaculte', component: AddFaculteComponent },
   
  { path: 'modifierFaculte/:id', component: EditFaculteComponent },  
  { path: 'deleteFaculte', component: DeleteFaculteComponent },   
 
{ path: 'getAllPoles', component: PoleListComponent },  
{ path: 'addPole', component: AddPoleComponent },
 
{ path: 'modifierPole/:id', component: UpdatePoleComponent },  
{ path: 'deletePole', component: DeletePoleComponent },  
{path: 'uploadFacultePhoto/:id', component:UploadFileComponent} ,
{path: 'uploadPolePhoto/:id', component:UploadFilePoleComponent} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
