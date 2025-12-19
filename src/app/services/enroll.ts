import { inject, Injectable } from '@angular/core';
import { user } from '../pages/tdf/tdf';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Enroll {
  url = 'http://localhost:3000/enroll';
  http = inject(HttpClient);
  enroll(user: user) {

    return this.http.post(this.url, user);
  }
}
