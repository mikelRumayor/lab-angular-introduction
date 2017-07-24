import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {
  photos: Array<Object> = [
    {
      id: 1,
      title: 'photo 1',
      src: 'https://cdn.meme.am/cache/instances/folder203/500x/64982203.jpg'
    }, {
      id: 2,
      title: 'photo 2',
      src: 'https://cdn.meme.am/cache/instances/folder203/500x/64982203.jpg'
    }, {
      id: 3,
      title: 'photo 3',
      src: 'https://cdn.meme.am/cache/instances/folder203/500x/64982203.jpg'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
