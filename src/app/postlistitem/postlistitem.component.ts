import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostlistitemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() hateIts: number;
  @Input() created_at: Date;

  constructor() { }

  ngOnInit() {
  }

  getLovCount(){
    return this.loveIts - this.hateIts;
  }

  addLove(){
    this.loveIts ++;
    console.log(this.loveIts);
  }

  addHate(){
    this.hateIts++;
  }

}
