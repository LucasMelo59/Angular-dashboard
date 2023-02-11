import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { HomeService } from '../../pages/home/home.service';

@Component({
  selector: 'app-customers-by-type-taxation',
  templateUrl: './customers-by-type-taxation.component.html',
  styleUrls: ['./customers-by-type-taxation.component.scss']
})
export class CustomersByTypeTaxationComponent implements OnInit {
  @Input() qtdSimplesNacionalClientes: number = 0;
  @Input() qtdLucroPresumidoClientes: number = 0;
  @Input() qtdTotalDeClientes: number = 0;

  constructor(private service: HomeService) { }

  ngOnInit(): void {
    this.qtdSimplesNacionalClientes = (this.qtdSimplesNacionalClientes/this.qtdTotalDeClientes)*100
    this.qtdLucroPresumidoClientes = (this.qtdLucroPresumidoClientes/this.qtdTotalDeClientes)*100
  }

  chart =  new Chart ({
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'Categoria por clientes'
    },
    xAxis: {
      categories: [
        'Tipo Simples Nacional',
        'Tipo Lucro Presumido',
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in %'
      }
    },
    series: [
     {
      type: 'pie',
      data: [
        {
          name: 'Simples Nacional',
          y: 33.3,
          color: 'rgb(237, 158, 32)',
        },
        {
          name: 'Lucro Presumido',
          y:76 ,
          color: '#7e0505',
        },
      ]
     }
    ],
    credits: {
      enabled: false
    }
  })

}
