import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Posts } from 'src/app/models/posts';
import { User } from 'src/app/models/user';
import { PostsService } from 'src/app/services/posts.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-posts-edit',
  templateUrl: './posts-edit.component.html',
  styleUrls: ['./posts-edit.component.scss']
})
export class PostsEditComponent implements OnInit {

  PostsEditForm: FormGroup;
  postsUpdate: Posts;
  posts: Posts;
  listUsers: User[] = [];

  constructor(
    private fb: FormBuilder,
    private postsService: PostsService,
    private router: Router,
    private snackBar: MatSnackBar,
    private utilServices: UtilService
  ) { }

  ngOnInit(): void {
    this.posts = JSON.parse(this.utilServices.getItemLocalStorage('posts'));
    this.listUsers = JSON.parse(this.utilServices.getItemLocalStorage('users'));

    this.PostsEditForm = this.fb.group({
      id: new FormControl(this.posts.id),
      title: new FormControl(this.posts.title, [Validators.required]),
      body: new FormControl(this.posts.body, [Validators.required]),
      userId: new FormControl(this.posts.userId, [Validators.required])
    });

  }

  updatePosts(): void {
    this.postsUpdate = {
      id: this.PostsEditForm.get('id')?.value ?? this.posts.id,
      title: this.PostsEditForm.get('title')?.value ?? this.posts.title,
      body: this.PostsEditForm.get('body')?.value ?? this.posts.body,
      userId: this.PostsEditForm.get('userId')?.value ?? this.posts.userId
    }

    this.postsService.updatePosts(this.postsUpdate).subscribe(() => {
      let snackRef = this.snackBar.open('Posts Updated!!', '', {
        duration: 3000,
      });

      snackRef.afterDismissed().subscribe(() => {
        this.router.navigate(['/']);
      })
    });

  }


}
