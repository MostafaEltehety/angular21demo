import { Component, computed, inject, signal } from '@angular/core';
import {form,Field,email,required} from '@angular/forms/signals';
import { login_data } from '../../models/login_data';
 import{MatFormFieldModule} from '@angular/material/form-field';
import { MatInput } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-signal',
  imports: [Field, MatFormFieldModule, MatInput,MatCheckboxModule,TranslateModule],
  templateUrl: './signal.html',
  styleUrl: './signal.scss',
})
export class Signal {


loginModel=signal<login_data>({
  email:'',
  password:'',
  rememberMy:false
});

loginForm=form(this.loginModel,(filedPath)=>{
  required(filedPath.email),
  email(filedPath.email),
  required(filedPath.password)
});

}
