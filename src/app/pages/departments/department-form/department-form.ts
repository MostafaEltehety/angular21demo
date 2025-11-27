import { Component, inject } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Departments } from '../../../services/departments';
import { department } from '../../../models/demaprtment';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-department-form',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    TranslateModule,

    MatInputModule,
    MatDividerModule,

  ],
  templateUrl: './department-form.html',
  styleUrl: './department-form.scss',
})
export class DepartmentForm {

constructor(public dialogRef:MatDialogRef<DepartmentForm>){}

Close() {
  this.from.reset();
this.dialogRef.close(false);
}
  from = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });
  services = inject(Departments);

  save() {
    const model = this.from.value as department;
    this.services.createDepartment(model);
  }
}
