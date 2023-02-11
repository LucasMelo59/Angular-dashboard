import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Cliente } from '../../model/entity/cliente';
import { catchError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  constructor(private service: ClienteService, private spinner: NgxSpinnerService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(res => console.log(res));
    // this.spinner.show();

    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 2000);
  }

  submitCadastro(model: Cliente){
    this.service
    .register(model)
    .pipe(
      catchError(err => {
        this.toastr.warning("Ocorreu um erro ao efetuar o cadastro")
        throw err
      })
    )
    .subscribe(() => this.toastr.success("Cadastro feito com sucesso"))
  }
}
