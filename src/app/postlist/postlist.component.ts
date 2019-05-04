import { Component, OnInit, Input } from '@angular/core';
import { MyPost } from '../../models/myPost.model';
import { Subscription } from 'rxjs';
import { PostsService } from 'src/service/posts.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {

  postList:MyPost[]; 
  postsSubscription: Subscription;

  constructor(private postsService: PostsService){

  }

  ngOnInit(){
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: MyPost[]) => {
        this.postList = posts;
      }
    );
    this.postsService.emitPosts();
  }

}
