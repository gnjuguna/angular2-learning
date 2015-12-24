import {Component} from 'angular2/core';

@Component({
	selector: 'click-me',
	template: `
	<button (click)="onClickMe()">Click Me!</button>
	{{ clickMessage }}
	`
})

export class ClickMeComponent {
	clickMessage: string = '';

	onClickMe() {
		this.clickMessage = 'You are my Hero';
	}
}
