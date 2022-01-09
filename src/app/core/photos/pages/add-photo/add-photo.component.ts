import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PhotosService } from '../../services/photos.service';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {
  photoForm = new FormGroup({
    photo: new FormControl(null, [Validators.required])
  })
  photo!:any
  loading:boolean = false

  constructor(private _photosService: PhotosService, private _router: Router) { }

  ngOnInit(): void {
  }
  savePhoto(){
  
    if(this.photoForm.valid){
      this.loading = true;
      this._photosService.savePhoto(this.photo)
      .subscribe({
        next:()=>{
          this.loading = false;
          this._router.navigate(['./photos'])
        },
        error:(error)=>console.log(error)
      })
    }
  }
  openWindow(element:HTMLElement){
    element.click()
  }
  onChange(event:any){
    const reader = new FileReader();
 
    if(event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.photo = reader.result
        this.photoForm.patchValue({
          photo: reader.result
       });
      }
    }

  }
}
