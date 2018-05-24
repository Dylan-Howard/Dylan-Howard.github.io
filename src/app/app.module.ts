import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ResourcesComponent } from './resources/resources.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { ResourceComponent } from './resource/resource.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ResourcesComponent,
    FrontPageComponent,
    ResourceComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
