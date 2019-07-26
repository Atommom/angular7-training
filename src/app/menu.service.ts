import { Injectable } from '@angular/core';
import { Link } from './models/Link';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private clickedMenuItem:Link;

  constructor() { }

  public getClickedMenuItem(){
    return this.clickedMenuItem;
  }

  public setClickedMenuItem(link:Link){
    this.clickedMenuItem = link;
    console.log(this.clickedMenuItem);
  }
  
}
