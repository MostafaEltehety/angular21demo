import { Component, inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormData } from './form-data/form-data';
import {   MatButtonModule } from "@angular/material/button";
import { MasterDetails  as servicesMaster} from '../../services/master-details';
import { EmployeeMasterDetails } from '../../models/employeeMasterDetails';
@Component({
  selector: 'app-master-details',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './master-details.html',
  styleUrl: './master-details.scss',
})
export class MasterDetails implements OnInit{

_services=inject(servicesMaster);
_dialog=inject(MatDialog);
employees!:EmployeeMasterDetails[];
ngOnInit(): void {
  this._services.GetEmployeesMasterDAll().subscribe(res=>{
    this.employees=res;
    // console.log(res);
    console.log(this.employees);
  });
}
openFormCreateEdit(){
  this._dialog.open(FormData,{
    maxWidth:'100%',
    maxHeight:'100%'
  });
}

}
