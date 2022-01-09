import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Photo } from '../../photos/interfaces/photo.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidebar') sidebarRef! : ElementRef
  @Input() photo!:Photo
  constructor() {}

  ngOnInit(): void {
  }
  closeSidebar(){
    this.sidebarRef.nativeElement.style.right = '-100%'
  }

}
