import { Component, Input, OnInit, AfterViewInit, SimpleChanges } from '@angular/core';
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
  @Input() data: Array<any> = []
  constructor(private service: HomeService) { }
  chart: any

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.chart =  new Chart ({
      chart: {
        type: 'pie',
        height: 325
      },
      title: {
        text: 'Categoria por tipo de cliente'
      },
      xAxis: {
        categories: [
          'Tipo Simples Nacional',
          'Tipo Lucro Presumido',
        ]
      },
      yAxis: {
        title: {
          text: 'Revenue in number'
        }
      },
      series: [
       {
        type: 'pie',
        data:this.data
       }
      ],
      credits: {
        enabled: false
      }
    })

  }



}
