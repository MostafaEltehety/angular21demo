import { Component } from '@angular/core';

@Component({
  selector: 'app-greetings',
  imports: [],
  templateUrl: './greetings.html',
  styleUrl: './greetings.scss',
})
export class Greetings {
  greetUser(): void{
    alert('Hi from the TestChild Component!');
  }
}
