import { Component } from '@angular/core';
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
export class EmployeeForm {

   constructor(
    private fb: FormBuilder,

  ) {}

  // employeeForm = this.fb.group({
  //   personal: this.fb.group({
  //     name: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     birthDate: ['', Validators.required]
  //   }),
  //   job: this.fb.group({
  //     department: ['', Validators.required],
  //     salary: ['', Validators.required]
  //   }),
  //   skills: this.fb.array([])
  // });

}
