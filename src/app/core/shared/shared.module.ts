import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FloatingActionButtonComponent } from './floating-action-button/floating-action-button.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FloatingActionButtonComponent,
    LoaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,RouterModule
  ], 
  exports:[HeaderComponent,FloatingActionButtonComponent,LoaderComponent,SidebarComponent]
  
})
export class SharedModule { }
