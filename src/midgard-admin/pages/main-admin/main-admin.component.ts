import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-admin',
  templateUrl: './main-admin.component.html',
  styleUrls: ['./main-admin.component.css']
})
export class MainAdminComponent implements OnInit {

  hideMenu: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu(menuToggle) {
    this.hideMenu = menuToggle;
  }
}
