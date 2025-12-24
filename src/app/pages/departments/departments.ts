import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { department } from '../../models/demaprtment';
import { MatAnchor } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogModule, DialogRef } from '@angular/cdk/dialog';
import { DepartmentForm } from './department-form/department-form';
import { from } from 'rxjs';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from "@angular/material/sort";

@Component({
  selector: 'app-departments',
  imports: [
    MatAnchor,
    TranslateModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSort,
    MatSortHeader
],
  templateUrl: './departments.html',
  styleUrl: './departments.scss',
  standalone: true,
})
export class Departments {
  allDepartments: Array<department> = [
    { id: 1, name: 'Web Dev', description: 'Web Development' },
    { id: 2, name: 'BA', description: 'Business Analysis' },
    { id: 3, name: 'Mob Dev', description: 'Mobile Development' },
    { id: 4, name: 'QA', description: 'Quality Assurance' },
    { id: 5, name: 'Desk Dev', description: 'Desktop Development' },
    { id: 6, name: 'PM', description: 'Project Management' }
  ];

  displayColumns: string[] = ['id', 'name', 'description'];
  // @ViewChild(MatPaginator)
  // paginator!: MatPaginator;
  @ViewChild(MatPaginator) deptPaginator!: MatPaginator;

  // @ViewChild(MatSort)
  // depSort!: MatSort;
  @ViewChild(MatSort) deptSort!: MatSort;

  departmentsDataSource = new MatTableDataSource<any>();

  ngAfterViewInit() {
    this.departmentsDataSource.data = this.allDepartments;
    this.departmentsDataSource.paginator = this.deptPaginator;
    this.departmentsDataSource.sort = this.deptSort;
  }

  applyFilter(event: Event): void {
    const filterInputValue = (event.target as HTMLInputElement).value;
    this.departmentsDataSource.filter = filterInputValue;
  }

  dialog = inject(MatDialog);
  openDialoge() {
    const currentDir = (document.documentElement.getAttribute('dir') as 'ltr' | 'rtl') || 'ltr';
    this.dialog.open(DepartmentForm, {
      direction: currentDir,
      disableClose: true,
    });
  }
}
