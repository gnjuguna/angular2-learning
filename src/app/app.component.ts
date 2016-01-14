import {Component} from 'angular2/core';

import {HeroFormComponent} from './hero-from.component.ts';



@Component({
  selector: 'app',
  directives: [HeroFormComponent],
  template: `
    <hero-form></hero-form>
  `
})
export class AppComponent { }
