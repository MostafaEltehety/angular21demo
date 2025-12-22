import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatFormField } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: 'app-view-child-tutorial',
  imports: [MatFormField, MatInput, MatAnchor],
  templateUrl: './view-child-tutorial.html',
  styleUrl: './view-child-tutorial.scss',
})
export class ViewChildTutorial {
  @ViewChild('nameTempeleteRefVariable') inputRef!:ElementRef;
foucsInput() {
this.inputRef.nativeElement.foucs;
this.inputRef.nativeElement.value="Mostafa Ahmed";
}

}
