import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Photo } from '../interfaces/photo.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private _baseUrl:string = environment.baseUrl
  
  constructor(private _http: HttpClient) { }

  savePhoto(photo:string): Observable<Photo> {
    return this._http.post<Photo>(`${this._baseUrl}/photos`,{image:photo} )
  }

  getPhotos():Observable<Photo[]>{
    return this._http.get<Photo[]>(`${this._baseUrl}/photos`)
  }

  getPhoto(id:string):Observable<Photo>{
    return this._http.get<Photo>(`${this._baseUrl}/photos/${id}`)
  }
  
  deletePhoto(id:string):Observable<Photo>{
    return this._http.delete<Photo>(`${this._baseUrl}/photos/${id}`)
  }
}