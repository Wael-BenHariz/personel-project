import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddOffreComponent } from './add-offre/add-offre.component';
import { ContactComponent } from './contact/contact.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { HomepageGuard } from './homepage.guard';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { LoginBusinessComponent } from './login-business/login-business.component';
import { LoginEmployerComponent } from './login-employer/login-employer.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { OffreComponent } from './offre/offre.component';
import { RegisterBusinessComponent } from './register-business/register-business.component';
import { RegisterEmployerComponent } from './register-employer/register-employer.component';

const routes: Routes = [
  {path: '' , redirectTo: 'offres', pathMatch: 'full'},
  {path: 'home' , component: HomeComponent , canActivate:[HomepageGuard]} ,
  {path: 'loginemp' , component: LoginEmployerComponent , canActivate:[HomepageGuard]} ,
  {path: 'loginent', component: LoginBusinessComponent , canActivate:[HomepageGuard]} ,
  {path: 'registeremp' , component: RegisterEmployerComponent , canActivate:[HomepageGuard]} ,
  {path: 'registerent' , component: RegisterBusinessComponent , canActivate:[HomepageGuard]} ,
  {path: 'offres' , component: OffreComponent} ,
  {path: 'contact' , component: ContactComponent},
  {path: 'forbidden' , component: ForbiddenComponent},
  {path: 'posts' , component: ListPostsComponent},
  {path: 'newjob', component: AddOffreComponent},
  {path: 'newcat', component: AddCategoryComponent} ,
  {path: 'myposts', component: MyPostsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
