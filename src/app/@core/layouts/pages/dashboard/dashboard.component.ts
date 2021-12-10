import { Component } from '@angular/core';

import { SideMenuItems } from './side-menu-items';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public sideMenu = SideMenuItems;
}
