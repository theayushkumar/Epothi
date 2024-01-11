import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { HindiClassesComponent } from './hindi/hindi-classes/hindi-classes.component';
import { HindiBookListComponent } from './hindi/hindi-book-list/hindi-book-list.component';
import { EngClassesComponent } from './english/eng-classes/eng-classes.component';
import { EngBookLisxComponent } from './english/eng-book-lisx/eng-book-lisx.component';
import { UrduClassesComponent } from './urdu/urdu-classes/urdu-classes.component';
import { UrduBookListComponent } from './urdu/urdu-book-list/urdu-book-list.component';
import { TeacherClassesComponent } from './teacher/teacher-classes/teacher-classes.component';
import { TeacherBookListComponent } from './teacher/teacher-book-list/teacher-book-list.component';
import { ViewportComponent } from './viewport/viewport.component';
import { OpenBookComponent } from './hindi/open-book/open-book.component';

const routes: Routes = [
  {path:'', component : HomepageComponent},

  {path:'hindi', component : ViewportComponent, children :[
    {path:'', component : HindiClassesComponent},
    {path:'hindiBook', component : ViewportComponent, children:[
      {path:'', component:HindiBookListComponent},
      {path:'openBook', component:OpenBookComponent},

    ]},

  ]},
  {path:'eng', component : EngClassesComponent },
  {path:'engBook', component : EngBookLisxComponent },
  {path:'urdu', component : UrduClassesComponent },
  {path:'urduBook', component : UrduBookListComponent },
  {path:'teacher', component : TeacherClassesComponent },
  {path:'teacherBook', component : TeacherBookListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
