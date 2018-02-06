import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WorkshopModule } from '../app/workshop/workshop.module';
import { AuthModule } from '../app/auth/auth.module';

import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    WorkshopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
