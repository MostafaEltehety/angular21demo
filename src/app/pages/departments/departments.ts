import { Component, inject } from '@angular/core';
import { department } from '../../models/demaprtment';
import { MatAnchor } from "@angular/material/button";
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogModule, DialogRef } from '@angular/cdk/dialog';
import { DepartmentForm } from './department-form/department-form';

@Component({
  selector: 'app-departments',
  imports: [MatAnchor,TranslateModule,MatIconModule,MatDialogModule],
  templateUrl: './departments.html',
  styleUrl: './departments.scss',
})
export class Departments {
  dialog=inject(MatDialog);
openDialoge() {
this.dialog.open(DepartmentForm);
}

}
