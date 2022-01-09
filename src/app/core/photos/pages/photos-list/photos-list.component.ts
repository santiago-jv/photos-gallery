import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Photo } from '../../interfaces/photo.interface';
import { PhotosService } from '../../services/photos.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {
  private _photos:Photo[]=[]
  loading:boolean = true;
  constructor(private _photosService:PhotosService, private _router: Router) { }
  get photos(){
    return this._photos
  }
  ngOnInit(): void {
    this._photosService.getPhotos()
    .subscribe({
      next:(photos)=>{
        this._photos = photos
        this.loading = false
      },
      error:(error)=> console.log(error)
    })
  }
  seePhoto(id:string) {
    this._router.navigate(['./photos', id])
  }

}
