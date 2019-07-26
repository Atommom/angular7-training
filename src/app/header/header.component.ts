import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Link } from '../models/Link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private menuService: MenuService;

  constructor(menuService: MenuService) {
    this.menuService = menuService;
  }

  ngOnInit() {
  }

  private getClickedItemText(){
    const link :Link = this.menuService.getClickedMenuItem();
    if(link){
      return link.getText();
    }
    return null;
  }

}
