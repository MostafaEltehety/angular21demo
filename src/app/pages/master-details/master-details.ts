import { AfterViewInit, Component, inject, OnInit, ViewChild, viewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormData } from './form-data/form-data';
import { MatButtonModule } from '@angular/material/button';
import { MasterDetails as servicesMaster } from '../../services/master-details';
import { EmployeeMasterDetails } from '../../models/employeeMasterDetails';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ɵEmptyOutletComponent } from '@angular/router';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-master-details',
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginator,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './master-details.html',
  styleUrl: './master-details.scss',
})
export class MasterDetails implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<any>();
  _services = inject(servicesMaster);
  _dialog = inject(MatDialog);
  employees!: EmployeeMasterDetails[];
  displayCol: string[] = ['id', 'firstName', 'lastName', 'experience'];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.data = this.employees;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this._services.GetEmployeesMasterDAll().subscribe((res) => {
      this.employees = res;
      // console.log(res);
      this.dataSource.data = this.employees;

      console.log(this.employees);
    });
  }
  openFormCreateEdit() {
    this._dialog.open(FormData, {
      maxWidth: '100%',
      maxHeight: '100%',
    });
  }

  filterData(event: Event) {
    const search = (event.target as HTMLInputElement).value;
    this.dataSource.filter = search;
  }
}
