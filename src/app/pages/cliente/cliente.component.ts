import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Cliente } from '../../model/entity/cliente';
import { catchError, map } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  clientes: Cliente[] = []
  constructor(private service: ClienteService, private toastr: ToastrService, private spinner: NgxSpinnerService) { }


  ngOnInit(): void {
    this.service.findByRazaoSocial("").subscribe((res) => this.clientes = res
    )

  }

  submitCadastro(model: Cliente){
    this.spinner.show()
    this.service
    .register(model)
    .pipe(
      catchError(err => {
        this.toastr.warning("Ocorreu um erro ao efetuar o cadastro")
        this.spinner.hide()
        throw err
      })
    )
    .subscribe(() => {
      this.toastr.success("Cadastro feito com sucesso")
      this.spinner.hide()
    })
  }

  submitFilter(model: string){
    this.service
    .findByRazaoSocial(model)
    .pipe(
      (
        catchError(err => {
          this.toastr.warning("Ocorreu um erro ao filtrar")
          throw err
        })
      )
    )
    .subscribe(
      (res) =>{
         this.clientes = res
        }
    )
  }

  submitDelete(model: any){
    console.log(model);
    this.spinner.show()
    this.service
    .delete(model)
    .pipe(
      catchError(err => {
        this.toastr.warning("Ocorreu um erro ao deletar")
        this.spinner.hide()
        throw err
      })
    )
    .subscribe(() =>this.spinner.hide()
    )
  }
}
