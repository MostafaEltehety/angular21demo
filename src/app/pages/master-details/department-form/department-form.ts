import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatHint, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-department-form',
  imports: [MatFormField, MatHint, MatLabel,MatInputModule],
  templateUrl: './department-form.html',
  styleUrl: './department-form.scss',
})
export class DepartmentForm {
 departmentName: string = '';
  constructor(private dialogRef: MatDialogRef<DepartmentForm>) {}

  save() {
    this.dialogRef.close(this.departmentName); // send data back
  }

  close() {
    this.dialogRef.close();
  }
}
