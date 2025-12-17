import { Component } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DepartmentForm } from './department-form/department-form';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-master-details',
  imports: [MatDialogModule,MatButtonModule],
  templateUrl: './master-details.html',
  styleUrl: './master-details.scss',
})
export class MasterDetails {
   constructor(private dialog: MatDialog) { }

  openAddDepartmentDialog() {
    const dialogRef = this.dialog.open(DepartmentForm, {
      //width: '400px',
      disableClose: true   // user cannot close by clicking outside
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('New Department:', result);
        // TODO: Save to the backend or refresh grid/table
      }
    });
  }

}
