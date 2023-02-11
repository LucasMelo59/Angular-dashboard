import { Component, Input, OnInit } from '@angular/core';
import {
  faFile,
  faMoneyBillTransfer,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.scss']
})
export class TopWidgetsComponent implements OnInit {
  faUser = faUser;
  faMoneyBillsTransfer = faMoneyBillTransfer;
  faFile = faFile
  @Input() totalCliente: number = 0;
  @Input() tipoSimplesNacional: number = 0;
  @Input() tipoLucroPresumido: number = 0;
  @Input() qtdNotasFiscais:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
