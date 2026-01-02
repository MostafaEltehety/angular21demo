import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
 import { MatSlideToggle } from "@angular/material/slide-toggle";
 import { CommonModule, NgFor, NgIf } from '@angular/common';
import { MatAnchor } from "@angular/material/button";
import { CdkNoDataRow } from "@angular/cdk/table";

@Component({
  selector: 'app-ng-template',
  imports: [FormsModule, MatSlideToggle, CommonModule, MatAnchor, CdkNoDataRow],
  templateUrl: './ng-template.html',
  styleUrl: './ng-template.scss',
  standalone: true,
})
export class NgTemplate {
data() {
  if(this.items.length==0){
this.items=["item1","item2","item3","item4"];
  }else{
    this.items=[];
  }
}
isLogin=true;
isAdmin=true;
items:string[]=[];
}
