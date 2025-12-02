import { Component, inject, signal } from '@angular/core';
import { MatFormField, MatLabel, MatError, MatFormFieldControl, MatSuffix } from '@angular/material/form-field';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { login_eCommerce } from '../../../../models/e-commerce/login';
import { form, Field, required, submit } from '@angular/forms/signals';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import { NgClass } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {  MatIconModule } from "@angular/material/icon";
import {  MatSnackBar, MatSnackBarModule,MatSnackBarVerticalPosition,MatSnackBarHorizontalPosition  } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MatFormField, MatLabel, TranslateModule,MatSnackBarModule, MatInput, MatError,MatSuffix, Field, MatButtonModule, NgClass, MatButtonToggleModule, MatIconModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
togglePassword() {
this.hidePassword=!this.hidePassword;
}
hidePassword=true;
snackBar=inject(MatSnackBar);
translation=inject(TranslateService);

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
router=inject(Router);
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
this.snackBar.open(this.translation.instant("LOGIN_SUCCESS"),this.translation.instant("CLOSE"),{
  duration:3000,
  direction:this.translation.instant("CLOSE"),
  horizontalPosition:this.horizontalPosition,
  verticalPosition:this.verticalPosition
});
const login=this.formLogin().value();

localStorage.setItem("loginInfo",JSON.stringify(login));
 
this.router.navigate(['/blank'])


  }



}
