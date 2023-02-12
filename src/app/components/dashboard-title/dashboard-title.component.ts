import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-title',
  templateUrl: './dashboard-title.component.html',
  styleUrls: ['./dashboard-title.component.scss']
})
export class DashboardTitleComponent implements OnInit {
  @Input() routes: any = []
  constructor() { }

  ngOnInit(): void {
  }

}
