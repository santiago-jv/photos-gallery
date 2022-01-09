import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-floating-action-button',
  templateUrl: './floating-action-button.component.html',
  styleUrls: ['./floating-action-button.component.css']
})
export class FloatingActionButtonComponent {

  constructor(private _router:Router) { }

 
  goToAdd() {
    this._router.navigate(['./photos/add'])
  }
}
