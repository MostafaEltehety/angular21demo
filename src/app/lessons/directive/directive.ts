import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { HightLight } from '../../directives/hight-light';

@Component({
  selector: 'app-directive',
  imports: [NgIf,NgClass,HightLight],
  templateUrl: './directive.html',
  styleUrl: './directive.scss',
})
export class Directive {
isLogedIn=true;
isActive=true;
}
