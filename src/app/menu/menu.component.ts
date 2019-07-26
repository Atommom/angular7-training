import { Component, OnInit } from '@angular/core';
import { Link } from '../models/Link';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  private links:Array<Link> = 
  [
    new Link("http://www.google.com", "Google"), 
    new Link("http://www.bing.com", "Bing"),
    new Link("http://duckduckgo.com", "DuckDuckGo")
   ];

  ngOnInit() {
  }

}
