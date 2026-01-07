import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import {  MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-child',
  imports: [MatButtonModule],
  templateUrl: './child.html',
  styleUrl: './child.scss',
})
export class Child {
@Input() parentMsg:string='';

@Output() sendMsg =new EventEmitter<string>();
@Output() user=new EventEmitter<{id:number,name:string,email:string}>();

Send(){
  this.sendMsg.emit('Hello From Child');
}
SendUser(){
  this.user.emit({
    id:101,name:'Mostafa Ahmed',email:'mostafa.eltehety@gmail.com'
  })
}

}
