import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comment';
import { Posts } from 'src/app/models/posts';
import { User } from 'src/app/models/user';
import { CommentService } from 'src/app/services/comment.service';
import { UtilService } from 'src/app/services/util.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.scss']
})
export class PostsDetailComponent implements OnInit {

  posts: Posts;
  user: User;
  comments$: Observable<Comment[]>;

  constructor(
    private utilServices: UtilService,
    private commentService: CommentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.posts = JSON.parse(this.utilServices.getItemLocalStorage('posts'));
    this.user = JSON.parse(this.utilServices.getItemLocalStorage('user'));
    this.comments$ = this.commentService.getListCommentsByPostId(this.posts.id);
  }

  goHome(): void {
    this.router.navigate(['/']);
  }

}
