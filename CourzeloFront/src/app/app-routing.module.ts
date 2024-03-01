import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './shared/home/home.component';
import { ListDomaineComponent } from './domaine/list-domaine/list-domaine.component';
import { UpdateDomaineComponent } from './update-domaine/update-domaine.component';
import { DeleteDomaineComponent } from './domaine/delete-domaine/delete-domaine.component';
import { AjoutDomaineComponent } from './domaine/ajout-domaine/ajout-domaine.component';
import { PhotoComponent } from './photo/photo.component';
import { AddCommentaireComponent } from './commentaire/add-commentaire/add-commentaire.component';
import { ListeCommentaireComponent } from './liste-commentaire/liste-commentaire.component';

const routes: Routes = [
  {path:"navbar",component:NavbarComponent},
  {path:"home",component:HomeComponent},
  { path: 'domaines', component:ListDomaineComponent},
  { path: 'addDomaine', component:AjoutDomaineComponent},
  { path: 'update-domaine/:id', component:UpdateDomaineComponent},
  { path: 'deleteDomain/:id', component:DeleteDomaineComponent},
  { path: 'uploadimg/:id', component:PhotoComponent},
  { path: 'addCommentaire', component:AddCommentaireComponent},
  { path: 'commentaires', component:ListeCommentaireComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
