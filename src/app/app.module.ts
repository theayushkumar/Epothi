import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HindiClassesComponent } from './hindi/hindi-classes/hindi-classes.component';
import { HindiBookListComponent } from './hindi/hindi-book-list/hindi-book-list.component';
import { EngClassesComponent } from './english/eng-classes/eng-classes.component';
import { EngBookLisxComponent } from './english/eng-book-lisx/eng-book-lisx.component';
import { UrduBookListComponent } from './urdu/urdu-book-list/urdu-book-list.component';
import { UrduClassesComponent } from './urdu/urdu-classes/urdu-classes.component';
import { TeacherClassesComponent } from './teacher/teacher-classes/teacher-classes.component';
import { TeacherBookListComponent } from './teacher/teacher-book-list/teacher-book-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HindiClassesComponent,
    HindiBookListComponent,
    EngClassesComponent,
    EngBookLisxComponent,
    UrduBookListComponent,
    UrduClassesComponent,
    TeacherClassesComponent,
    TeacherBookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
