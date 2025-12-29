import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-contact-information',
  imports: [ReactiveFormsModule,MatFormFieldModule,MatLabel,MatInputModule,TranslateModule],
  templateUrl: './contact-information.html',
  styleUrl: './contact-information.scss',
})
export class ContactInformation {
@Input() contactInfo!:FormGroup;
}
