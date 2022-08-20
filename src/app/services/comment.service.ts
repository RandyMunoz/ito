import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  BASE_URL: string = "https://jsonplaceholder.typicode.com/comments";

  constructor(private httpClient: HttpClient) { }

  getListCommentsByPostId(postId: number): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(this.BASE_URL, {
      params: new HttpParams().set('postId',postId)
    });
  }

}
