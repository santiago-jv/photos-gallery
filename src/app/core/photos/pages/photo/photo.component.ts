import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Photo } from '../../interfaces/photo.interface';
import { PhotosService } from '../../services/photos.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  photo!:Photo
  @ViewChild('sidebar') sidebarRef! : ElementRef
  constructor(private _activatedRoute: ActivatedRoute, private _photosService:PhotosService, private _router: Router) { 
    
  }
  ngOnInit(): void {
    this._activatedRoute.params.pipe(
      switchMap(({id})=>this._photosService.getPhoto(id))
    ).subscribe({
      next:(photo)=>{
        this.photo = photo;
      }
    })

  }
  deletePhoto(){
    this._photosService.deletePhoto(this.photo.id!).subscribe({
      next:()=>{
        this._router.navigate(['./photos'])

      }
    })
  }
  openSidebar(){
    document.getElementById('sidebar')!.style.right = '0';
  }
  

}
