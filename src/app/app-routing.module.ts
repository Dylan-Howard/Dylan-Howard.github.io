import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent }     from './contact/contact.component';
import { HomeComponent }        from './home/home.component';
import { ProjectComponent }     from './project/project.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent },
  { path: 'project/:title', component: ProjectComponent },
  // { path: 'project', component: ProjectComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
