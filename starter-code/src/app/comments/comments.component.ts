import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Array<Object> = [
    {
      id: 1,
      title: 'photo 1',
      date: new Date(),
      description: 'Angular shit'
    }, {
      id: 2,
      title: 'photo 2',
      date: new Date(),
      description: 'Angular shit'

    }, {
      id: 3,
      title: 'photo 3',
      date: new Date(),
      description: 'Angular shit'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
