import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  articles: Array<Object> = [
    {
      id: 1,
      title: 'photo 1',
      image: 'https://cdn.meme.am/cache/instances/folder203/500x/64982203.jpg',
      description: 'Angular shit'
    }, {
      id: 2,
      title: 'photo 2',
      image: 'https://cdn.meme.am/cache/instances/folder203/500x/64982203.jpg',
      description: 'Angular shit'

    }, {
      id: 3,
      title: 'photo 3',
      image: 'https://cdn.meme.am/cache/instances/folder203/500x/64982203.jpg',
      description: 'Angular shit'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
