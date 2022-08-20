import { Pipe, PipeTransform } from '@angular/core';
import { Posts } from '../models/posts';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(listPosts: any, filterByUserId: number): any {
    if(!filterByUserId) return listPosts;
    
    const newPosts = [];

    for (const post of listPosts) {
      if (post.userId === filterByUserId) {
        newPosts.push(post);
      }
    }

    return newPosts;
  }

}
