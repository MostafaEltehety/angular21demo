import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { errorMessages, regExps } from '../form-validator';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatError, MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';


 interface CountryInfo {
  _id: number;
  iso2: string;
  iso3: string;
  lat: number;
  long: number;
  flag: string;
}

 interface UsersData {
  countryInfo: CountryInfo;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  continent: string;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
}


@Component({
  selector: 'app-dialog-box',
  imports: [  ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatError,
    NgIf
     ],
  templateUrl: './dialog-box.html',
  styleUrl: './dialog-box.scss',
})


export class DialogBox implements OnInit {

  action: string = '';
  local_data: any = {};
  cancel: string = 'Cancel';

  tableForm!: FormGroup;
  errors = errorMessages;

  constructor(
    public dialogRef: MatDialogRef<DialogBox>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.local_data = { ...this.data };
    this.action = this.local_data.action || '';

    this.createForm();

    if (this.local_data) {
      this.tableForm.patchValue(this.local_data);
    }
  }

  createForm(): void {
    this.tableForm = this.formBuilder.group({
      country: ['', [Validators.required, Validators.pattern(regExps['str'])]],
      cases: ['', [Validators.required, Validators.pattern(regExps['num'])]],
      todayCases: ['', [Validators.required, Validators.pattern(regExps['num'])]],
      deaths: ['', [Validators.required, Validators.pattern(regExps['num'])]],
      todayDeaths: ['', [Validators.required, Validators.pattern(regExps['num'])]],
      recovered: ['', [Validators.required, Validators.pattern(regExps['num'])]],
      active: ['', [Validators.required, Validators.pattern(regExps['num'])]],
    });
  }

  closeDialog(): void {
    this.dialogRef.close({ data: { action: 'Cancel' } });
  }

  onSubmit(): void {
    this.dialogRef.close({
      data: { action: this.action, data: this.tableForm.value }
    });
  }
}
