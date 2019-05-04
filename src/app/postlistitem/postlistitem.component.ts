import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from 'src/service/posts.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostlistitemComponent implements OnInit {

  @Input() id: number;
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() hateIts: number;
  @Input() created_at: Date;

  constructor(private postsService:PostsService, private router:Router) { }

  ngOnInit() {
  }

  getLovCount(){
    return this.loveIts - this.hateIts;
  }

  addLove(){
    this.postsService.addLove(this.id);
  }

  addHate(){
    this.postsService.addHate(this.id);
  }

  removePost(){
    if(confirm("Etes-vous sûr de vouloir supprimer ce post?")) {
      this.postsService.removePostById(this.id);
      this.router.navigate(['posts']);
    }
  }

}
