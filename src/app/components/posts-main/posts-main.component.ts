import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/models/posts';
import { PostsService } from 'src/app/services/posts.service';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { UtilService } from 'src/app/services/util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts-main',
  templateUrl: './posts-main.component.html',
  styleUrls: ['./posts-main.component.scss']
})
export class PostsMainComponent implements OnInit {

  listPosts$: Observable<Posts[]>;
  listUsers: User[] = [];
  user: User;  
  filterPosts: number;

  constructor(
    private postsService: PostsService, 
    private userService: UserService,
    private router: Router,
    private utilService: UtilService
    ) { }

  ngOnInit(): void {
    this.utilService.clearLocalStorage();
    this.listPosts$ = this.postsService.getAllPosts();

    this.userService.getAllUsers().subscribe(
      (users: User[]) => {
        users.forEach(user => this.listUsers.push(user));
      }
    );

  }

  goDetailPosts(post: Posts): void {
    this.utilService.setItemLocalStorage('posts', JSON.stringify(post));
    let userFound = this.listUsers.find(user => post.userId === user.id)
    if(userFound) this.user = userFound;
    this.utilService.setItemLocalStorage('user', JSON.stringify(this.user));
    this.router.navigate(['/detail/'+post.id]);
  }


  goCreatePosts(): void {
    this.router.navigate(['/create']);
  }

  goEditPosts(post: Posts): void {
    this.utilService.setItemLocalStorage('posts', JSON.stringify(post));
    this.utilService.setItemLocalStorage('users', JSON.stringify(this.listUsers));
    this.router.navigate(['/edit/'+post.id]);
  }

  changeFilter(): void{
    this.listPosts$ = this.listPosts$.pipe(
      map((posts) => {
        return posts.filter((p) => p.userId === this.filterPosts)
      })
    );
  }

}
