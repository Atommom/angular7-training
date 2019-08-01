import { Component, OnInit } from '@angular/core';
import { Link } from '../models/Link';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  private menuService: MenuService;
  private clickedItem:Link;

  constructor(menuService: MenuService) {
    this.menuService = menuService;
  }

  private links:Array<Link> = 
[   new Link("/", "Home"),  
    new Link("/shipment", "Shipment"),
    new Link("/carrier", "Carrier")
   ];

  ngOnInit() {
  }
  public setClickedItem(itm: Link, event: Event){
    event.preventDefault();
    this.clickedItem = itm;
    this.menuService.setClickedMenuItem(this.clickedItem);
  }

}
