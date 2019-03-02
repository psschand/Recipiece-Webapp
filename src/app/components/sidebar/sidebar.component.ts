import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public opened: boolean;

  constructor() { }

  ngOnInit() {
    this.opened = false;
  }

  public toggleNavbar = () => {
    this.opened = !this.opened;
  }

}
