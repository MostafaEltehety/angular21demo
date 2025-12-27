import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { deparmtentsSelect } from '../../../../models/demaprtment';
import { TranslateModule } from '@ngx-translate/core';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { map, Observable, startWith } from 'rxjs';
import { MatSelectModule } from '@angular/material/select';
import { AsyncPipe } from '@angular/common';

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
    AsyncPipe,
  ],
  templateUrl: './job-data.html',
  styleUrl: './job-data.scss',
  standalone: true,
})
export class JobData implements OnInit {
  @Input( ) jobGroup!: FormGroup;
  @Input() departments!: deparmtentsSelect[];

  searchCtrl = new FormControl('');
  filteredDepartments!: Observable<deparmtentsSelect[]>;


ngOnInit(): void {
  this.filteredDepartments = this.searchCtrl.valueChanges.pipe(
    startWith(''),
    map((search: string | null) =>
      (this.departments || []).filter(d =>
        d.name.toLowerCase().includes((search || '').toLowerCase())
      )
    )
  );
}


}
