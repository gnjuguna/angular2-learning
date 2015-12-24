import {Component} from 'angular2/core';

import {Hero} from './hero';


@Component({
  selector: 'app',
  template: `
  <h2> {{ title }} </h2>   
  <input #newHero         
        (keyup.enter)="addHeroEnter(newHero);" 
        (blur)="addHero(newHero.value); newHero.value=''" />       
  <button (click)="addHero(newHero.value)">Add</button>  
  <h3> My favorite here is: {{ myHero }}</h3>  
  <p>Heroes:</p>
  <ul>
    <li *ngFor="#hero of heroes">
      {{ hero }}
    </li>
  </ul> 
  <p *ngIf="heroes.length > 3">There are many heroes!</p> 
  `
})
export class AppComponent {
  title: string;
  myHero: string;
  heroes: string[];

  constructor() {
    this.title = 'Tour of heroes';
    this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    this.myHero = this.heroes[0];
  }

  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
      newHero = '';
    }
  }
  addHeroEnter(newHero: any) {
    if (newHero) {
      this.heroes.push(newHero.value);
      newHero.value = '';
    }
  }
}
