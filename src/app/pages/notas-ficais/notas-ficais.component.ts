import { Component, OnInit } from '@angular/core';
import { NotaFiscal } from '../../model/entity/notaFiscal';
import { NotasFiscaisService } from './notas-fiscais.service';
import { ClienteDto } from '../../model/dto/clienteDto';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-notas-ficais',
  templateUrl: './notas-ficais.component.html',
  styleUrls: ['./notas-ficais.component.scss']
})
export class NotasFicaisComponent implements OnInit {
  notasFiscais: NotaFiscal[] = [];
  clientesDto: ClienteDto[] = [];
  constructor(private service: NotasFiscaisService, private toastr: ToastrService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.service.getAllNotas().subscribe((res) => this.notasFiscais = res);
    this.service.getAllClientes().subscribe((res) => {this.clientesDto = res
    })
  }

  submitCadastro(model: NotaFiscal){
    this.service.cadastrar(model)
    .pipe(
      catchError(err => {
        this.toastr.warning("Ocorreu um erro durante a execução")
        throw err
      })
    )
    .subscribe(() => this.toastr.success("Nota Cadastrada com sucesso!"))
  }

  submitedFilter(model: number){
    this.spinner.show()
    this.service.buscarPorNotaCliente(model)
    .pipe(
      catchError(err => {
        this.toastr.warning("Ocorreu um erro durante a execução")
        throw err
      })
    )
    .subscribe((res) => {
      this.notasFiscais = res
      this.spinner.hide()
    })
  }

  delete(model: number){
    this.spinner.show()
    this.service.delete(model).subscribe(() => {
      this.spinner.hide()
      this.toastr.success(`Entidade de numeração: ${model} foi apagada com sucesso` )
    }
    )
  }

}
