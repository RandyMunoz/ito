import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Posts } from 'src/app/models/posts';
import { User } from 'src/app/models/user';
import { PostsService } from 'src/app/services/posts.service';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.scss']
})
export class PostsCreateComponent implements OnInit {

  PostsForm = this.fb.group({
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
    userId: new FormControl(null, [Validators.required])
  });

  listUsers: User[] = [];
  postsSaved: Posts;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private postsService: PostsService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (users: User[]) => {
        users.forEach(user => this.listUsers.push(user));
      }
    );
  }

  saveForm(): void {
    this.postsSaved = {
      id: 0,
      title: this.PostsForm.get('title')?.value ?? '',
      body: this.PostsForm.get('body')?.value ?? '',
      userId: this.PostsForm.get('userId')?.value ?? 0
    }
    
    this.postsService.savePosts(this.postsSaved).subscribe(() => {
      let snackRef = this.snackBar.open('New Posts Created!!', '', {
        duration: 3000,
      });

      snackRef.afterDismissed().subscribe(() => {
        this.router.navigate(['/']);
      })
    });
  }



}
