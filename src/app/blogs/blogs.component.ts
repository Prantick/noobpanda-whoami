import { Component, Input, OnInit } from '@angular/core';
import { Blogs } from '../models/blogs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  @Input()
  theme!:boolean;
  @Input()
  data!:Array<Blogs>;
  constructor() { }

  ngOnInit(): void {
  }

}
