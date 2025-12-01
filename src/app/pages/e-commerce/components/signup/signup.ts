import { Component, signal } from '@angular/core';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { email, Field, form, maxLength, minLength, pattern, required, submit, validate } from '@angular/forms/signals';
import { TranslateModule } from '@ngx-translate/core';
import { MatInput } from "@angular/material/input";
 import { signup_eCommerce } from '../../../../models/e-commerce/sigup';
import { ɵInternalFormsSharedModule } from "@angular/forms";
import { MatIcon } from "@angular/material/icon";
import { MatCheckbox } from "@angular/material/checkbox";
import { MatAnchor } from "@angular/material/button";
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-signup',
  imports: [Field, TranslateModule, MatFormField, MatLabel, MatInput, MatError, ɵInternalFormsSharedModule, MatCheckbox, MatAnchor, NgClass],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
save(event: Event) {
event.preventDefault();
submit(this.signUpForm,async()=>{
  console.log("SIGNUP FORM :",this.signUpForm().value());
});

}

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
  required(filedPath.fullName);
  required(filedPath.userName);
  required(filedPath.accept);
  pattern(filedPath.confirmPassword,/^[a-zA-Z0-9_@]{6,}$/);
  required(filedPath.confirmPassword);
  required(filedPath.email);
  required(filedPath.mobile);
  pattern(filedPath.mobile,/^01[0125][0-9]{8}$/);
  required(filedPath.password);
  email(filedPath.email);
  pattern(filedPath.password,/^[a-zA-Z0-9_@]{6,}$/);
 validate(filedPath.confirmPassword,({value,valueOf})=>{
  const pass=valueOf(filedPath.password);
  const confirm=value();
  if(confirm!==pass && confirm.length){
return{
  kind:'misMatch'
}
  }return null;
 });

});


}
