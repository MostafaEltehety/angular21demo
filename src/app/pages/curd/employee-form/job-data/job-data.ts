import { Component, Input } from '@angular/core';
import { FormGroup, ɵInternalFormsSharedModule } from '@angular/forms';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatSelect } from "@angular/material/select";

@Component({
  selector: 'app-job-data',
  imports: [ɵInternalFormsSharedModule, MatFormField, MatLabel, MatSelect],
  templateUrl: './job-data.html',
  styleUrl: './job-data.scss',
})
export class JobData {
@Input() jobGroup!:FormGroup;

}
