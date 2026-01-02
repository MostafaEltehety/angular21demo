import { Component, ElementRef, OnInit, viewChild, ViewChild, ViewChildren } from '@angular/core';
import { MatFormField } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatAnchor } from "@angular/material/button";
import { Greetings } from '../../greetings/greetings';



@Component({
  selector: 'app-view-child-tutorial',
  imports: [MatFormField, MatInput, MatAnchor,Greetings],
  templateUrl: './view-child-tutorial.html',
  styleUrl: './view-child-tutorial.scss',
})
export class ViewChildTutorial  {


  @ViewChild('nameTempeleteRefVariable') inputRef!:ElementRef;
  @ViewChild('emailInput') inputEmailRef!:ElementRef;
  @ViewChild('box') boxRef!:ElementRef;
  @ViewChild(Greetings,{static:false}) say!:Greetings;
 @ViewChildren(Greetings) allGreetings!:Greetings[];
foucsInput() {
this.inputRef.nativeElement.foucs;
this.inputRef.nativeElement.value="Mostafa Ahmed";
}

border(){
this.inputEmailRef.nativeElement.style.color = 'red';
}

borderDiv() {
this.boxRef.nativeElement.style.border='10px solid red';
}

greeting() {
this.say.greetUser();
}
callAllGreetings(){
  this.allGreetings.forEach(g=>g.greetUser());
}

}
