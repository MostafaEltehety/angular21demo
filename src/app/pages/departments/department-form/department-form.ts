import { Component, inject } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Departments } from '../../../services/departments';
import { department } from '../../../models/demaprtment';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-department-form',
  imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatCardModule, TranslateModule, MatIcon],
  templateUrl: './department-form.html',
  styleUrl: './department-form.scss',
})
export class DepartmentForm {

from=new FormGroup({
  id:new FormControl(0),
  name:new FormControl('', Validators.required),
  description:new FormControl('',Validators.required)
});
services=inject(Departments);

save(){
  const model=this.from.value as department;
this.services.createDepartment(model);
}

}
