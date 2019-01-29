import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public btnData =  5
  constructor() { }

  ngOnInit() {
  }

  clickMe(){
    this.btnData = 4 + 4;
    
    console.log('Got Clicked');
  }

}
