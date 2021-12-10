import { Component } from '@angular/core';

import { ItensSide } from './dashboard.component.list';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public headerSide = ItensSide;
}
