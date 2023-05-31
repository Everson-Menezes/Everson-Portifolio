import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypingAnimatorModule } from 'angular-typing-animator'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }


];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    ProjectsComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    TypingAnimatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
