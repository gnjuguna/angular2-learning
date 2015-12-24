import {Component} from 'angular2/core';

import {Hero} from './hero';

@Component({
  selector: 'app',
  template: `
  <h2> {{ title }} </h2>
  <h3> My favorite here is: {{ myHero.name }}</h3>
  <p *ngIf="heroes.length > 3">There are many heroes!</p>
  <p>Heroes:</p>
  <ul>
    <li *ngFor="#hero of heroes">
      {{ hero.name }}
    </li>
  </ul>
  `
})
export class AppComponent {
  title: string;
  myHero: Hero;
  heroes: Hero[];

  constructor() {
    this.title = 'Tour of heroes';
    this.heroes = [
      new Hero(1, 'Windstorm'),
      new Hero(13, 'Bombasto'),
      new Hero(15, 'Magneta'),
      new Hero(20, 'Tornado')
    ];
    this.myHero = this.heroes[0];
  }
}
