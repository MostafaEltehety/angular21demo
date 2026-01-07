import { Component } from '@angular/core';
import { Child } from "../child/child";
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-parent',
  imports: [Child,NgIf],
  templateUrl: './parent.html',
  styleUrl: './parent.scss',
})
export class Parent {
recivedUser(user: { id: number; name: string; email: string; }) {

this.userFromChild =user;

}
msg='Hello From Parent Component';
messageFromChild:string='';
recivedMsg(msg:string){
  this.messageFromChild=msg;
}

 userFromChild!:{id:number,name:string,email:string};



}
