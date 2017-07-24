import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  teams: Array<Object> = [
    {
      year: 2016,
      name: 'React',
      champion_url: 'http://www.linnovate.net/sites/default/files/reactjs.png',
      best_players: 'React router'
    }, {
      year: 2015,
      name: 'React',
      champion_url: 'http://www.linnovate.net/sites/default/files/reactjs.png',
      best_players: 'Redux'

    }, {
      year: 2014,
      name: 'React',
      champion_url: 'http://www.linnovate.net/sites/default/files/reactjs.png',
      best_players: 'Webpack'
    }]
  constructor() { }

  ngOnInit() {
  }

}
