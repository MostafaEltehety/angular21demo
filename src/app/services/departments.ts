import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { deparmtentsSelect, department } from '../models/demaprtment';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { apiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root',
})
export class Departments {
  http=inject(HttpClient);

  createDepartment(department:department){
this.http.post<department>(environment.apiUrl+'/Departments/CreateDepartment',department);
  }
  getDeparmtentsSelect():Observable<apiResponse>{
    return this.http.get<apiResponse>(environment.apiUrl+'/Departments/GetDeparmtentsSelect');
  }
}
