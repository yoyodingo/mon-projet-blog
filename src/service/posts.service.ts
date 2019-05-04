import { Injectable } from '@angular/core';
import { MyPost } from '../models/myPost.model';
import { Subject } from 'rxjs';


@Injectable()
export class PostsService {



    private posts: MyPost[] = new Array(
        new MyPost(1,'Mon premier post', 'Ta về ta tắm ao ta, dù trong dù đục ao nhà vẫn hơn'),
        new MyPost(2,'Mon deuxième post', 'Người làm nên của, của không làm nên người'),
        new MyPost(3,'Et mon troisième', 'Vàng thật không sợ lửa')
    );

    postsSubject = new Subject<MyPost[]>();

    emitPosts() {
        this.postsSubject.next(this.posts);
    }

    createPost(title: string, content: string) {

        const newIndex = this.posts[this.posts.length - 1].id + 1;
        const newPost = new MyPost(newIndex,title,content);

        this.posts.push(newPost);
        this.emitPosts();
    }

    removePostById(id: number) {
        const index = this.posts.findIndex(
            (p) => {
                if (p.id == id) {
                    return true;
                }
            }
        );
        this.posts.splice(index,1);
        this.emitPosts();
    }

    addLove(id :number){
        const index = this.posts.findIndex(
            (p) => {
                if (p.id == id) {
                    return true;
                }
            }
        );
        this.posts[index].loveIts++;
        this.emitPosts();
    }
    addHate(id :number){
        const index = this.posts.findIndex(
            (p) => {
                if (p.id == id) {
                    return true;
                }
            }
        );
        this.posts[index].hateIts++;
        this.emitPosts();
    }

}