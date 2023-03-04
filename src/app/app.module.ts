import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterBusinessComponent } from './register-business/register-business.component';
import { RegisterEmployerComponent } from './register-employer/register-employer.component';
import { LoginBusinessComponent } from './login-business/login-business.component';
import { LoginEmployerComponent } from './login-employer/login-employer.component';
import { OffreComponent } from './offre/offre.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { AddOffreComponent } from './add-offre/add-offre.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { MyPostsComponent } from './my-posts/my-posts.component';








@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    RegisterBusinessComponent,
    RegisterEmployerComponent,
    LoginBusinessComponent,
    LoginEmployerComponent,
    OffreComponent,
    ForbiddenComponent,
    ListPostsComponent,
    AddOffreComponent,
    AddCategoryComponent,
    MyPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
