import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './core/front-office/Formateur-Admin/login/login.component';
import { RegisterComponent } from './core/front-office/Participant/register/register.component';
import { EditProfileComponent } from './core/back-office/User/edit-profile/edit-profile.component';
import { AdminListComponent } from './core/back-office/User/admin-list/admin-list.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';

import { AddProfileComponent } from './core/back-office/User/add-profile/add-profile.component';
import { TwoWayFactorPageComponent } from './core/front-office/two-way-factor-page/two-way-factor-page.component';
import { FormateurListComponent } from './core/back-office/User/formateur-list/formateur-list.component';
import { UploadFileComponent } from './core/back-office/User/upload-file/upload-file.component';
import { AddAdminComponent } from './core/back-office/User/add-admin/add-admin.component';
import { AddFormateurComponent } from './core/back-office/User/add-formateur/add-formateur.component';
import { LoginParticipantComponent } from './core/front-office/Participant/login-participant/login-participant.component';
import { AuthGuard } from './core/Guard/auth.guard';


const routes: Routes = [
  {path:"login",component:LoginParticipantComponent},
  {path:"login-id",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"verify-code",component:TwoWayFactorPageComponent},

  {path:"navbar",component:NavbarComponent},
  {path:"sidebar",component:SideBarComponent},
  {path:"home",component:HomeComponent},

  {path:"addProfile",component:AddProfileComponent, canActivate : [AuthGuard]},
  {path:"editProfile",component:EditProfileComponent, canActivate : [AuthGuard]},
  {path:"upload/:id", component:UploadFileComponent, canActivate : [AuthGuard]},

  {path:"formateur-list",component:FormateurListComponent, canActivate : [AuthGuard]} ,   
  {path:"admin-list",component:AdminListComponent, canActivate : [AuthGuard]},

  {path:"addAdmin",component:AddAdminComponent, canActivate : [AuthGuard]},
  {path:"addFormateur",component:AddFormateurComponent, canActivate : [AuthGuard]},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
