import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { ResourceComponent } from './resource/resource.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  { path: '', redirectTo: '/front-page', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: 'front-page', component: FrontPageComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'resources/:link', component: ResourceComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
