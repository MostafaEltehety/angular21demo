import { Component, inject, OnInit } from '@angular/core';
import { department } from '../../models/demaprtment';
import { MatAnchor } from "@angular/material/button";
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogModule, DialogRef } from '@angular/cdk/dialog';
import { DepartmentForm } from './department-form/department-form';
import { from } from 'rxjs';
import { MatTable, MatColumnDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatHeaderCellDef, MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-departments',
  imports: [MatAnchor, TranslateModule, MatIconModule, MatDialogModule, MatTable, MatColumnDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatHeaderCellDef],
  templateUrl: './departments.html',
  styleUrl: './departments.scss',
  standalone:true
})
export class Departments {

allDepartments: Array<department> = [
  {id: 1, name: 'Web Dev', description: 'Web Development'},
  {id: 2, name: 'QA', description: 'Quality Assurance'},
  {id: 3, name: 'BA', description: 'Business Analysis'},
  {id: 4, name: 'Mob Dev', description: 'Mobile Development'}
];

displayColumns: string[] = ['id', 'name', 'description'];


departmentsDataSource = new MatTableDataSource<any>;

ngAfterViewInit(){
  this.departmentsDataSource.data = this.allDepartments;
}








  dialog=inject(MatDialog);
openDialoge() {
   const currentDir = document.documentElement.getAttribute('dir') as 'ltr' | 'rtl' || 'ltr';
this.dialog.open(DepartmentForm,{
  direction:currentDir,
  disableClose: true


}


);

}

}
