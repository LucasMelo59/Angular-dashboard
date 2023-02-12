import { Component, OnInit } from '@angular/core';
import { NotaFiscal } from '../../model/entity/notaFiscal';
import { NotasFiscaisService } from './notas-fiscais.service';
import { ClienteDto } from '../../model/dto/clienteDto';

@Component({
  selector: 'app-notas-ficais',
  templateUrl: './notas-ficais.component.html',
  styleUrls: ['./notas-ficais.component.scss']
})
export class NotasFicaisComponent implements OnInit {
  notasFiscais: NotaFiscal[] = [];
  clientesDto: ClienteDto[] = [];
  constructor(private service: NotasFiscaisService) { }

  ngOnInit(): void {
    this.service.getAllNotas().subscribe((res) => this.notasFiscais = res);
    this.service.getAllClientes().subscribe((res) => {this.clientesDto = res
      console.log(this.clientesDto);

    })
  }

  submitCadastro(model: NotaFiscal){
    this.service.cadastrar(model)
    .subscribe()
  }

  submitedFilter(model: number){
    this.service.buscarPorNotaCliente(model).subscribe((res) => {
      this.notasFiscais = res
    })
  }

}
