import { Component, OnInit, Input } from '@angular/core';
import { MyPost } from '../myPost.model';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {

  @Input() postList: MyPost[] ;

  constructor() { }

  ngOnInit() {
  }

}
