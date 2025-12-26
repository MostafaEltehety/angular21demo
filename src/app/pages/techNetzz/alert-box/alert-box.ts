import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-alert-box',
  imports: [MatButtonModule],
  templateUrl: './alert-box.html',
  styleUrl: './alert-box.scss',
})
export class AlertBox implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    cancelText: string,
    confirmText: string,
    message: string,
    title: string
  }, private mdDialogRef: MatDialogRef<AlertBox>) { }

  ngOnInit(): void {
  }

  public cancel() {
    this.mdDialogRef.close(false);
  }

  public confirm() {
    this.mdDialogRef.close(true);
  }
}
