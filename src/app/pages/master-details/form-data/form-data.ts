import { Component, inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import {
  MatDatepicker,
  MatDatepickerToggle,
  MatDatepickerInput,
} from '@angular/material/datepicker';
import { MatRadioGroup, MatRadioButton } from '@angular/material/radio';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmployeeMasterDetails } from '../../../models/employeeMasterDetails';
import { MasterDetails } from '../../../services/master-details';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-form-data',
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInput,
    MatDatepicker,
    MatDatepickerToggle,
    MatDatepickerInput,
    MatRadioGroup,
    MatRadioButton,
    MatSelectModule,
    ReactiveFormsModule
  ],
  templateUrl: './form-data.html',
  styleUrl: './form-data.scss',
})
export class FormData {
  _fb=inject(FormBuilder);
  employeeForm!:FormGroup;
  employee!:EmployeeMasterDetails;
  services=inject(MasterDetails);
  _dialogRef=inject(DialogRef<FormData>);
  constructor(){
    this.employeeForm=this._fb.group({
      id:[0],
      firstName:'',
      lastName:'',
      email:'',
      dob:[new Date()],
      gender:'',
      education:'',
      company:'',
      experience:[0],
      packge:[0]
    });
  }
  education: string[] = ['Matric', 'Diploma', 'Intermediate', 'Graduate', 'Post Graduate'];

onFormSubmit() {
if(this.employeeForm.valid){
 this.employee=this.employeeForm.value;
this.services.createEmployeeMasterD(this.employee).subscribe(res=>{
if(res>0){
  alert("Employee Add Succefully");
  this._dialogRef.close();
}
});
}
}


}
