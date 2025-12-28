import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { deparmtentsSelect } from '../../../../models/demaprtment';
import { TranslateModule } from '@ngx-translate/core';
import { MatInputModule } from '@angular/material/input';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { map, Observable, startWith } from 'rxjs';
import { MatSelectModule } from '@angular/material/select';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {  MatDatepickerModule } from "@angular/material/datepicker";
import { MatIcon } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatCheckbox } from "@angular/material/checkbox";
@Component({
  selector: 'app-job-data',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    NgxMatSelectSearchModule,
    TranslateModule,
    NgxMaterialTimepickerModule,
    MatDatepickerModule,
    MatIcon,
    MatSlideToggleModule,
    MatCheckbox
],
  templateUrl: './job-data.html',
  styleUrl: './job-data.scss',
  standalone: true,
})
export class JobData implements OnInit {
  @Input() jobGroup!: FormGroup;
  @Input() departments!: deparmtentsSelect[];

  searchCtrl = new FormControl('');
  filteredDepartments!: Observable<deparmtentsSelect[]>;

  ngOnInit(): void {
    this.filteredDepartments = this.searchCtrl.valueChanges.pipe(
      startWith(''),
      map((search: string | null) =>
        (this.departments || []).filter((d) =>
          d.name.toLowerCase().includes((search || '').toLowerCase())
        )
      )
    );
  }


}
