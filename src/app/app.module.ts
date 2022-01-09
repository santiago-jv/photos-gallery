import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePhotosComponent } from './core/photos/pages/home-photos/home-photos.component';
import {HttpClientModule} from "@angular/common/http"

import { SharedModule } from './core/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePhotosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
