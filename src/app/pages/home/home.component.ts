import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeService } from './home.service';
import { async, catchError } from 'rxjs';
import { Chart } from 'highcharts';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-pages',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private service: HomeService, private toastr: ToastrService) { }
  qtdClientesTotal!: number;
  qtdClientesTipoSimplesNacional!: number;
  qtdClientesTipoLucroPresumido!: number;
  qtdNotasFiscais!: number;
  data: any = [];
  series: any = [];



  ngOnInit(): void {
    // this.spinner.show();

    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 2000);

    this.service.countCLientes()
    .pipe(
      catchError(err => {
        this.toastr.warning("Ocorreu um erro durante a execução")
        throw err
      })
    )
    .subscribe({
       next: (res: number) => {
         this.qtdClientesTotal = res
         this.series.push({
          data: res
         })
      }
    })

    this.service.countCLienteForType("SIMPLES_NACIONAL")
    .pipe(
      catchError(err => {
        this.toastr.warning("Ocorreu um erro durante a execução")
        throw err;
      })
    )
    .subscribe((res) => {
      this.qtdClientesTipoSimplesNacional = res;
      this.data.push({
        name: 'Simples Nacional',
        y: res,
        color: 'rgb(237, 158, 32)',
       })

       this.series.push({
        data: res
       })

    })
    this.service.countCLienteForType("LUCRO_PRESUMIDO")
    .pipe(
      catchError(err => {
        this.toastr.warning("Ocorreu um erro durante a execução")
        throw err
      })
    )
    .subscribe((res) => {
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

