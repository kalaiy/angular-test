import { Injectable } from '@angular/core';
import { UserDetails } from '../models/userdetails';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Setting } from '../settings/settings';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  create(user: UserDetails) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(user);

    return this.http.post(Setting.url + 'user', body, {
      headers: headers,
    });
  }
}
