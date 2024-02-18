import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './shared/home/home.component';
import { AddBlogComponent } from './Blog/add-blog/add-blog.component';
import { ListBlogComponent } from './Blog/list-blog/list-blog.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UploadFileComponent } from './Blog/upload-file/upload-file.component';
import { UpdateBlogComponent } from './Blog/update-blog/update-blog.component';

const routes: Routes = [
  {path:"navbar",component:NavbarComponent},
  {path:"home",component:HomeComponent},
  {path: "addBlog", component: AddBlogComponent},
  {path: "listBlog", component: ListBlogComponent},
  {path: "dashboard", component: UserDashboardComponent},
  {path:"upload/:id", component:UploadFileComponent},
  {path:"updateBlog/:id", component: UpdateBlogComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
