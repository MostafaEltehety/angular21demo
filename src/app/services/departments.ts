import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { department } from '../models/demaprtment';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Departments {
  http=inject(HttpClient);

  createDepartment(department:department){
this.http.post<department>(environment.apiUrl+'/Departments/CreateDepartment',department);
  }
}
