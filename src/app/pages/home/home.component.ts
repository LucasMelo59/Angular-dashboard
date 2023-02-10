import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home-pages',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private service: HomeService) { }

  qtdClientesTipoSimplesNacional!: number;
  qtdClientesTipoLucroPresumido!: number;


  ngOnInit(): void {
    // this.spinner.show();

    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 2000);

  }
  }

