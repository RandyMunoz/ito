import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsMainComponent } from './components/posts-main/posts-main.component';
import { PostsDetailComponent } from './components/posts-detail/posts-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsNavComponent } from './components/posts-nav/posts-nav.component';
import { PostsService } from './services/posts.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FilterPipe } from './pipes/filter.pipe';
import { PostsEditComponent } from './components/posts-edit/posts-edit.component';
import { PostsCreateComponent } from './components/posts-create/posts-create.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsMainComponent,
    PostsDetailComponent,
    PostsNavComponent,
    FilterPipe,
    PostsEditComponent,
    PostsCreateComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatTooltipModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
