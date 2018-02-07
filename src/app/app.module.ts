import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopModule } from '../app/workshop/workshop.module';
import { AuthModule } from '../app/auth/auth.module';

import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent} from './apex/menu/menu.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    WorkshopModule,
    MatCardModule,
    CommonModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
