import {Component} from 'angular2/core';

@Component({
	selector: 'key-up-1',
	template: `
		<input #box (keyup)="onKey(box.value)" />
		<input (keyup.enter)="onEnter()" />
		<p>{{ values }}</p>
	`
})
export class KeyUpComponentV1 {
	values: string = '';

	onKey(value: string) {
		this.values += value + '|';
	}

	onEnter() {
		this.values = '';
	}
}
