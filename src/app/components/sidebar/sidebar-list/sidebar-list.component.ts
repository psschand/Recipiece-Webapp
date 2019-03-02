import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar-list',
  templateUrl: './sidebar-list.component.html',
  styleUrls: ['./sidebar-list.component.scss'],
})
export class SidebarListComponent implements OnInit {
  @Input() longForm: boolean;
  @Output() navToggled = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
