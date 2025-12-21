import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { deparmtentsSelect, department } from '../models/demaprtment';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Departments {
  http=inject(HttpClient);

  createDepartment(department:department){
this.http.post<department>(environment.apiUrl+'/Departments/CreateDepartment',department);
  }
  getDeparmtentsSelect(){
    return this.http.get<deparmtentsSelect>(environment.apiUrl+'/Departments/GetDeparmtentsSelect');
  }
}
