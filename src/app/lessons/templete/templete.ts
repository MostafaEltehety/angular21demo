import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInput, MatInputModule } from "@angular/material/input";

@Component({
  selector: 'app-templete',
  imports: [DatePipe, FormsModule, MatInputModule,MatButtonModule],
  templateUrl: './templete.html',
  styleUrl: './templete.scss',
})
export class Templete {
code_interbolation='Interpolation {{ }}';
user_name='Mostafa Ahmed';
isDisabled=true;
proprty_code='<button [disabled]="isDisabled">Save</button>';
event_code='<button (click)="showAlert()">Alert</button>';
tempeletRef='<input #user> <button (click)="login(user)">Login</button>';
today=new Date();
code_pip=`<p>{{today | date:'short'}}</p>`;
showAlert(){
  alert('Hello '+this.user_name);
}
login(user:HTMLInputElement){
const u=user.value;
alert("Welcome "+u);
}
}
