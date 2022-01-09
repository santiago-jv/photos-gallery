import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePhotosComponent } from './pages/home-photos/home-photos.component';
import { PhotosListComponent } from './pages/photos-list/photos-list.component';
import { PhotoComponent } from './pages/photo/photo.component';
import { AddPhotoComponent } from './pages/add-photo/add-photo.component';

const routes:Routes =[
  {
    path:'',
    component:HomePhotosComponent,
    children: [
      {
        path:'',
        component:PhotosListComponent
      },
      {
        path:'add',
        component:AddPhotoComponent
      },
      {
        path:':id',
        component:PhotoComponent
      },
      {
        path:'**',
        redirectTo:''
      }
    ]
  }
]

@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PhotosRoutingModule { }
