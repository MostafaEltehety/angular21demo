import { Component, signal } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { email, Field, form, maxLength, minLength, required } from '@angular/forms/signals';
import { TranslateModule } from '@ngx-translate/core';
import { MatInput } from "@angular/material/input";
 import { signup_eCommerce } from '../../../../models/e-commerce/sigup';
@Component({
  selector: 'app-signup',
  imports: [Field, TranslateModule, MatFormField, MatLabel, MatInput],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {

  signUpModel = signal<signup_eCommerce>({
        fullName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    accept: false,
    mobile: ''
  });

signUpForm=form(this.signUpModel,(filedPath)=>{
  required(filedPath.fullName),
  required(filedPath.userName),
  required(filedPath.accept),
  required(filedPath.confirmPassword),
  required(filedPath.email),
  required(filedPath.mobile),
  required(filedPath.password),
  email(filedPath.email),
  minLength(filedPath.password,6),
  maxLength(filedPath.password,20),
  

});


}
