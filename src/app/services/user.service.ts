import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from '../models/posts';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.BASE_URL);
  }

}
