import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { ForbiddenNameValidator } from '../../directives/validators/forbiddenName.validator';
import { ConfirmPasswordValidator } from '../../directives/validators/confirmPassword.validators';

@Component({
  selector: 'app-reactive-form',
  imports: [MatFormFieldModule, MatInput, ReactiveFormsModule, MatButtonModule, MatMenuModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.scss',
})
export class ReactiveForm {
  fb = inject(FormBuilder);
  // registrationForm = new FormGroup({
  //   userName: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     street: new FormControl(''),
  //     postalCode: new FormControl(''),
  //   }),
  // });

  registrationForm = this.fb.group(
  {
    userName: this.fb.control('', [
      Validators.required,
      Validators.minLength(4),
      ForbiddenNameValidator(/mostafa/),
    ]),
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    address: this.fb.group({
      city: [''],
      street: [''],
      postalCode: [''],
    }),
  },
  { validators: [ConfirmPasswordValidator] }
);


  getUserName() {
    return this.registrationForm.get('userName');
  }
getconfirmPassword(){
  return this.registrationForm.get('confirmPassword');
}
  loadData() {
    // setValue: must fill all controls
    this.registrationForm.setValue({
      userName: 'Mostafa Ahmed',
      password: '123',
      confirmPassword: '123',
      address: {
        city: 'Assuit',
        street: 'assuit',
        postalCode: '131',
      },
    });
  }

  loadDataPatchValue() {
    this.registrationForm.patchValue({
      userName: 'Khalid Ali',
      address: {
        city: 'Giza',
      },
    });
  }
}
