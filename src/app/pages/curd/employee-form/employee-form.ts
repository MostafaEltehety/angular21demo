import { Component, inject, OnInit } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { PersonalData } from './personal-data/personal-data';
import { JobData } from './job-data/job-data';
import { TranslateModule } from '@ngx-translate/core';
import { SkillsLanguages } from './skills-languages/skills-languages';
import { Profile } from './profile/profile';
import { MatAnchor } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Departments } from '../../../services/departments';
import { deparmtentsSelect } from '../../../models/demaprtment';
@Component({
  selector: 'app-employee-form',
  imports: [
    MatStepperModule,
    TranslateModule,
    PersonalData,
    JobData,
    ReactiveFormsModule,
    SkillsLanguages,
    Profile,
    MatAnchor,

  ],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.scss',
})
export class EmployeeForm implements OnInit {
  ngOnInit(): void {
    this.services.getDeparmtentsSelect().subscribe((res) => {
      if (res) {
        this.departments = res.data;
      }
    });
  }
  fb = inject(FormBuilder);
  services = inject(Departments);
  departments: deparmtentsSelect[] = [];
  employeeForm = this.fb.group({
    personal: this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', Validators.required],
      gender: new FormControl(''),
      nationalId: new FormControl(''),
    }),
    job: this.fb.group({
      department: ['', Validators.required],
      departmentId: [0],
      salary: ['', Validators.required],
    }),
    skills: this.fb.array([]),
  });

  get personalGroup(): FormGroup {
    return this.employeeForm.get('personal') as FormGroup;
  }

  get jobGroup(): FormGroup {
    return this.employeeForm.get('job') as FormGroup;
  }
}
