import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeService } from './home.service';
import { async } from 'rxjs';
import { Chart } from 'highcharts';

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
  qtdNotasFiscais!: number;
  data: any = [];
  series: any = [];



  // [
  //
  //   {
  //     name: 'Connecticut',
  //     type: 'column',
  //     color: '#7e0505',
  //     data: [
  //       47
  //     ]
  //   },
  //   {
  //     name: 'Ohio',
  //     type: 'column',
  //     color: '#ed9e20',
  //     data: [
  //       17
  //     ]
  //   },
  // ],


  ngOnInit(): void {
    // this.spinner.show();

    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 2000);

    this.service.countCLientes().subscribe({
       next: (res: number) => {
         this.qtdClientesTotal = res
         this.series.push({
          data: res
         })
      }
    })

    this.service.countCLienteForType("SIMPLES_NACIONAL").subscribe((res) => {
      this.qtdClientesTipoSimplesNacional = res;
      this.data.push({
        name: 'Simples Nacional',
        y: res,
        color: 'rgb(237, 158, 32)',
       })

       this.series.push({
        data: res
       })
       console.log(this.series);

    })
    this.service.countCLienteForType("LUCRO_PRESUMIDO").subscribe((res) => {
      this.qtdClientesTipoLucroPresumido = res;
      this.data.push({
          name: 'Lucro Presumido',
          y:res ,
          color: '#7e0505',
       })

       this.series.push({
        data: res
       })
    })

    this.service.countNotas().subscribe((res) => {
      this.qtdNotasFiscais = res;
    })

  }
  }

