import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './shared/home/home.component';
import { SupportComponent } from './support/support.component';
import { ListReclamationComponent } from './list-reclamation/list-reclamation.component';

const routes: Routes = [
  {path:'',component:HomeComponent},

  {path:'home',component:HomeComponent},

  {path:"support",component:SupportComponent},

  {path:"list",component:ListReclamationComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
