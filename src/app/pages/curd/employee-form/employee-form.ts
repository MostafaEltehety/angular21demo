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
import { ContactInformation } from './contact-information/contact-information';
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
ContactInformation
  ],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.scss',
})
export class EmployeeForm implements OnInit {
Save() {
console.log(this.employeeForm.value);
}
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
      departmentId: [0],
      salary: [0, Validators.required],
      position: [''],
      joinDateTime: [new Date()],
      attendanceTime: [new Date()],
      isActive: [false],
      appraisal: [false]
    }),

    skills: this.fb.group({
      english:[false],
      french:[false],
      german:[false]
    }),

    contactInfo:this.fb.group({
      phoneNumber:[''],
      email:['',Validators.email]
    }),

profile:this.fb.group({
  profileFile: [File],
  profilePath: [''],
  notes: ['']
})

  });

get profileGroup():FormGroup{
  return this.employeeForm.get('profile') as FormGroup;
}

  get personalGroup(): FormGroup {
    return this.employeeForm.get('personal') as FormGroup;
  }

  get jobGroup(): FormGroup {
    return this.employeeForm.get('job') as FormGroup;
  }
  get skillsGroup():FormGroup {
    return this.employeeForm.get('skills') as FormGroup;
  }

  get contactInfoGroup():FormGroup{
    return this.employeeForm.get('contactInfo') as FormGroup;
  }



}
