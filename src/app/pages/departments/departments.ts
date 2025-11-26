import { Component, inject, OnInit } from '@angular/core';
import { department } from '../../models/demaprtment';
import { MatAnchor } from "@angular/material/button";
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogModule, DialogRef } from '@angular/cdk/dialog';
import { DepartmentForm } from './department-form/department-form';
import { from } from 'rxjs';

@Component({
  selector: 'app-departments',
  imports: [MatAnchor,TranslateModule,MatIconModule,MatDialogModule],
  templateUrl: './departments.html',
  styleUrl: './departments.scss',
})
export class Departments {


  dialog=inject(MatDialog);
openDialoge() {
   const currentDir = document.documentElement.getAttribute('dir') as 'ltr' | 'rtl' || 'ltr';
this.dialog.open(DepartmentForm,{
  direction:currentDir,
  disableClose: true


}


);
 
}

}
