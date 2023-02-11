import { Component, OnInit } from '@angular/core';
import { NotaFiscal } from '../../model/entity/notaFiscal';
import { NotasFiscaisService } from './notas-fiscais.service';

@Component({
  selector: 'app-notas-ficais',
  templateUrl: './notas-ficais.component.html',
  styleUrls: ['./notas-ficais.component.scss']
})
export class NotasFicaisComponent implements OnInit {
  notasFiscais: NotaFiscal[] = [];
  constructor(private service: NotasFiscaisService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((res) => this.notasFiscais = res)
  }

}
