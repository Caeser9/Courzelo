import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './core/front-office/Formateur-Admin/login/login.component';
import { RegisterComponent } from './core/front-office/Formateur-Admin/register/register.component';
import { EditProfileComponent } from './core/back-office/User/edit-profile/edit-profile.component';
import { AdminListComponent } from './core/back-office/User/admin-list/admin-list.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';

import { AddProfileComponent } from './core/back-office/User/add-profile/add-profile.component';
import { TwoWayFactorPageComponent } from './core/front-office/two-way-factor-page/two-way-factor-page.component';
import { FormateurListComponent } from './core/back-office/User/formateur-list/formateur-list.component';
import { UploadFileComponent } from './core/back-office/User/upload-file/upload-file.component';
import { AddAdminComponent } from './core/back-office/User/add-admin/add-admin.component';
import { AddFormateurComponent } from './core/back-office/User/add-formateur/add-formateur.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"verify-code",component:TwoWayFactorPageComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"sidebar",component:SideBarComponent},
  {path:"home",component:HomeComponent},

  {path:"addProfile",component:AddProfileComponent},
  {path:"editProfile",component:EditProfileComponent},
  {path:"upload/:id", component:UploadFileComponent},

  {path:"formateur-list",component:FormateurListComponent} ,   
  {path:"admin-list",component:AdminListComponent},

  {path:"addAdmin",component:AddAdminComponent},
  {path:"addFormateur",component:AddFormateurComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
