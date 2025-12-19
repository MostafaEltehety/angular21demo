import { Component, inject, NgModule } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioGroup, MatRadioButton } from '@angular/material/radio';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatAnchor } from '@angular/material/button';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule, JsonPipe, NgIf } from '@angular/common';
import { Mobile } from '../../directives/validators/mobile';
import { Enroll } from '../../services/enroll';

export class user {
  constructor(
    public name: string,
    public email: string,
    public mobile: string,
    public interested: string,
    public timeSelection: string,
    public offers: boolean
  ) {}
}

@Component({
  selector: 'app-tdf',
  imports: [
    MatFormField,
    FormsModule,
    MatLabel,
    CommonModule,
    JsonPipe,
    MatInput,
    MatSelectModule,
    MatRadioGroup,
    MatRadioButton,
    MatCheckbox,
    MatAnchor,
    NgIf,
    Mobile,
  ],
  templateUrl: './tdf.html',
  styleUrl: './tdf.scss',
})
export class Tdf {
  server = inject(Enroll);
  topics = ['Angular', 'React', 'SQL Server', 'Python', 'CSharp', 'C++'];
  userModel = new user('', '', '', '', '', false);

  submitData() {
    this.server.enroll(this.userModel).subscribe((res) => {
      if (res) {
        console.log('Success',res);
      }
    },err=>{
      console.log(err);
    }
  );
  }
}
