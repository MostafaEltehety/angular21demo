import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import {
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
  ɵInternalFormsSharedModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatAnchor } from '@angular/material/button';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [
    TranslateModule,
    MatFormFieldModule,
    MatInput,
    ɵInternalFormsSharedModule,
    ReactiveFormsModule,
    MatAnchor,
    NgClass,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  form = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  private _snackBar = inject(MatSnackBar);
  private _translate = inject(TranslateService);
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  openSnackBar() {
    this._snackBar.open(
      this._translate.instant('LOGIN_SUCCESS'),
      this._translate.instant('CLOSE'),
      {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 3000,
        direction:this._translate.instant('LOGIN_SUCCESS')
      }
    );
  }
}
