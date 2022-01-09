import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosRoutingModule } from './photos-routing.module';
import { AddPhotoComponent } from './pages/add-photo/add-photo.component';
import { ReactiveFormsModule } from '@angular/forms';

import { PhotosListComponent } from './pages/photos-list/photos-list.component';
import { PhotoComponent } from './pages/photo/photo.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AddPhotoComponent,
    PhotosListComponent,
    PhotoComponent
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PhotosModule { }
