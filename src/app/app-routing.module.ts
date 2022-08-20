import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PostsCreateComponent } from './components/posts-create/posts-create.component';
import { PostsDetailComponent } from './components/posts-detail/posts-detail.component';
import { PostsEditComponent } from './components/posts-edit/posts-edit.component';
import { PostsMainComponent } from './components/posts-main/posts-main.component';

const routes: Routes = [
  { path: '', component: PostsMainComponent },
  { path: 'detail/:id', component: PostsDetailComponent },
  { path: 'edit/:id', component: PostsEditComponent },
  { path: 'create', component: PostsCreateComponent },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
