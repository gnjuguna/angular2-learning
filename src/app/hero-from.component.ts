import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Hero} from './hero';

@Component({
	selector: 'hero-form',
	templateUrl:'app/hero-form.component.html'
})
export class HeroFormComponent {
	powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

	model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

	submitterd = false;

	onSubmit() {
		this.submitterd = true;
	}

	get diagnostic() {
		return JSON.stringify(this.model);
	}
}