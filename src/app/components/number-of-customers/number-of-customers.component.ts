import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-number-of-customers',
  templateUrl: './number-of-customers.component.html',
  styleUrls: ['./number-of-customers.component.scss']
})
export class NumberOfCustomersComponent implements OnInit {
  chart: any;
  @Input() qtdSimplesNacionalClientes: number = 0;
  @Input() qtdLucroPresumidoClientes: number = 0;
  @Input() qtdTotalDeClientes: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    this.chart = new Chart({
      chart: {
        type: 'column',
        height: 325
      },
      title: {
        text: 'Categorias'
      },
      xAxis: {
        categories: [
          '',
        ]
      },
      yAxis: {
        title: {
          text: 'Quantidades de Clientes Categorias'
        }
      },
      series: [
        {
        type: 'column',
        name: 'Simples Nacional',
        color: 'rgb(237, 158, 32)',
        data: [this.qtdSimplesNacionalClientes]
      },
      {
        type: 'column',
        name: 'Lucro Presumido',
        color: 'rgb(126, 5, 5)',
        data: [this.qtdLucroPresumidoClientes]
      },
      {
        type: 'column',
        name: 'Clientes',
        color: '#044342',
        data: [this.qtdTotalDeClientes]
      },
    ],
      credits: {
        enabled: false
      }
    })
  }

}
