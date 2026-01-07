import { Component } from '@angular/core';
import { Parent } from "./parent/parent";

@Component({
  selector: 'app-input-output',
  imports: [Parent],
  templateUrl: './input-output.html',
  styleUrl: './input-output.scss',
})
export class InputOutput {
SendUser() {
throw new Error('Method not implemented.');
}

codeBase=`@Output() myEvent = new EventEmitter<Type>();`;


}
