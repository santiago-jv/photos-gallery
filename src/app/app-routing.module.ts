import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'photos',
    loadChildren:()=> import('./core/photos/photos.module').then(module=>module.PhotosModule)
  },
  {
    path:'**',
    redirectTo:'photos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
