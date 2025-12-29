import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormData } from './form-data/form-data';
import {   MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-master-details',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './master-details.html',
  styleUrl: './master-details.scss',
})
export class MasterDetails {

_dialog=inject(MatDialog);

openFormCreateEdit(){
  this._dialog.open(FormData,{
    maxWidth:'100%',
    maxHeight:'100%'
  });
}

}
