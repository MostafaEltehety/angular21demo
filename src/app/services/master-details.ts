import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EmployeeMasterDetails } from '../models/employeeMasterDetails';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { defineInjectable } from '@angular/core/primitives/di';

@Injectable({
  providedIn: 'root',
})
export class MasterDetails {
  http=inject(HttpClient);

  createEmployeeMasterD(model:EmployeeMasterDetails):Observable<number>{
    return this.http.post<number>(environment.apiUrl+'/Employees/CreateEmployeeMasterD',model);
  }

GetEmployeesMasterDAll():Observable<EmployeeMasterDetails[]>{
  return this.http.get<EmployeeMasterDetails[]>(environment.apiUrl+'/Employees/GetEmployeesMasterDAll');
}

}
