import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FackUserServices {
  private url = 'https://jsonplaceholder.typicode.com/users';
  http = inject(HttpClient);
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url);
  }
}
