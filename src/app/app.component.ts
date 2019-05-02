import { Component } from '@angular/core';
import { MyPost } from './myPost.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  newPostTitle:string ='';
  newPostContent:string ='';
  isValid = true;

  postList:MyPost[] = new Array(
    new MyPost('Mon premier post','Ta về ta tắm ao ta, dù trong dù đục ao nhà vẫn hơn'),
    new MyPost('Mon deuxième post','Người làm nên của, của không làm nên người'),
    new MyPost('Et mon troisième','Vàng thật không sợ lửa')
  ); 

  addPost(){
    if(this.validate()){
      this.postList.push(
        new MyPost(this.newPostTitle,this.newPostContent)
      );
      this.newPostTitle ='';
      this.newPostContent ='';
    }
  }

  validate(){
    if(this.newPostTitle != '' && this.newPostContent != '')
      this.isValid = true;
    else
      this.isValid = false;

    return this.isValid;
  }
}
