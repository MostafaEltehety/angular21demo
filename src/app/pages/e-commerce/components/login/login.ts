import { Component, signal } from '@angular/core';
import { MatFormField, MatLabel, MatError, MatFormFieldControl, MatSuffix } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';
import { login_eCommerce } from '../../../../models/e-commerce/login';
import { form, Field, required, submit } from '@angular/forms/signals';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import { NgClass } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {  MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-login',
  imports: [MatFormField, MatLabel, TranslateModule, MatInput, MatError,MatSuffix, Field, MatButtonModule, NgClass, MatButtonToggleModule, MatIconModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
togglePassword() {
this.hidePassword=!this.hidePassword;
}
hidePassword=true;

  loginModel = signal<login_eCommerce>({
    userName: '',
    password: '',
  });

  formLogin = form(this.loginModel, (f) => {
    required(f.userName);
    required(f.password);
  });

  login(event: Event) {
    event.preventDefault();
    submit(this.formLogin, async () => {
      console.log('LOGIN FORM E-COMMERCE : ', this.formLogin().value());
    });
  }



}
