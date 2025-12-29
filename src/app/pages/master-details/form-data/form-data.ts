import { Component } from '@angular/core';
import { MatDialogModule } from "@angular/material/dialog";
import {   MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from "@angular/material/input";
import { MatDatepicker, MatDatepickerToggle, MatDatepickerInput } from "@angular/material/datepicker";
import { MatRadioGroup, MatRadioButton } from "@angular/material/radio";

@Component({
  selector: 'app-form-data',
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInput, MatDatepicker, MatDatepickerToggle, MatDatepickerInput, MatRadioGroup, MatRadioButton],
  templateUrl: './form-data.html',
  styleUrl: './form-data.scss',
})
export class FormData {

}
