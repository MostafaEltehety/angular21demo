import { Component, Input } from '@angular/core';
import { MatFormFieldModule, MatSuffix } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';
import { MatInputModule } from '@angular/material/input';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatNativeDateModule, MAT_DATE_FORMATS, DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-personal-data',
  imports: [
    MatFormFieldModule,
    MatSuffix,
    ReactiveFormsModule,
    MatDatepickerModule,
    TranslateModule,
    MatNativeDateModule,
    MatInputModule,
    MatRadioButton,
    MatRadioGroup
],
  templateUrl: './personal-data.html',
  styleUrl: './personal-data.scss',
})
export class PersonalData {
 @Input() personalFrm!:FormGroup;
}
