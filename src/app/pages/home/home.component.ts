import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeService } from './home.service';
import { async } from 'rxjs';

@Component({
  selector: 'app-home-pages',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private service: HomeService) { }
  qtdClientesTotal!: number;
  qtdClientesTipoSimplesNacional!: number;
  qtdClientesTipoLucroPresumido!: number;


  ngOnInit(): void {
    // this.spinner.show();

    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 2000);

    this.service.countCLientes().subscribe({
       next: (res: number) => {
         this.qtdClientesTotal = res
      }
    })

    this.service.countCLienteForType("SIMPLES_NACIONAL").subscribe((res) => {
      this.qtdClientesTipoSimplesNacional = res
    })
    this.service.countCLienteForType("LUCRO_PRESUMIDO").subscribe((res) => this.qtdClientesTipoLucroPresumido = res)

  }
  }

