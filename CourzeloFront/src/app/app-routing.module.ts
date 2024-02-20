import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './core/front-office/login/login.component';
import { RegisterComponent } from './core/front-office/register/register.component';
import { EditProfileComponent } from './core/back-office/User/edit-profile/edit-profile.component';
import { AdminListComponent } from './core/back-office/User/admin-list/admin-list.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { FormateurListComponent } from './core/back-office/User/formateur-list/formateur-list.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"sidebar",component:SideBarComponent},
  {path:"home",component:HomeComponent},
  {path:"editProfile",component:EditProfileComponent},
  {path:"formateur-list",component:FormateurListComponent},
  {path:"admin-list",component:AdminListComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
