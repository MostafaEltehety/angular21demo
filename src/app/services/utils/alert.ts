import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlertBox } from '../../pages/techNetzz/alert-box/alert-box';
import { map, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Alert {

 dialogRef!: MatDialogRef<AlertBox>;

  constructor(private dialog: MatDialog) { }

  public open(options: any) {
    this.dialogRef = this.dialog.open(AlertBox, {
      data: {
        title: options.title,
        message: options.message,
        cancelText: options.cancelText,
        confirmText: options.confirmText
      },
    });
  }

  public confirmed(): Observable<any> {
    return this.dialogRef.afterClosed().pipe(take(1), map(res => {
      return res;
    }
    ));
  }


}
