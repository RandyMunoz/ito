import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  BASE_URL: string = "https://jsonplaceholder.typicode.com/posts";

  getAllPosts(): Observable<Posts[]> {
    return this.httpClient.get<Posts[]>(this.BASE_URL);
  }

  updatePosts(posts: Posts): Observable<Posts> {
    return this.httpClient.put<Posts>(this.BASE_URL + '/'+posts.id, posts);
  }

  savePosts(posts: Posts): Observable<Posts> {
    return this.httpClient.post<Posts>(this.BASE_URL, posts);
  }
}
