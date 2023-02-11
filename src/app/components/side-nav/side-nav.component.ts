import { Component, OnInit } from '@angular/core';
import {
  faDashboard,
  faUser,
  faFile
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']})
export class SideNavComponent implements OnInit {

  faDashboard = faDashboard;
  faUser = faUser;
  faFile = faFile
  constructor() { }

  ngOnInit(): void {
  }

}
