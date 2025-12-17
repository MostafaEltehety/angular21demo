import { Component, signal } from '@angular/core';
import {employeeTest } from '../../models/employee';
import {form}from '@angular/forms/signals';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.scss',
})
export class Employee {
emp=signal<employeeTest>({
  id:0,
  firstName:'',
lastName:'',
password:'',
confirmPassword:'',
dateOfBirth:new Date(),
emergencyContactName:'',
emergencyContactPhone:'',
hasEmergencyContact:false
});

form= form(this.emp);

}
