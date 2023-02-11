import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { NotaFiscal } from '../../model/entity/notaFiscal';
import {
  faTrashCan,
  faFile
} from '@fortawesome/free-solid-svg-icons';
import { FormComponent } from '../form-clientes/form.component';
import { FormNotaFiscalComponent } from '../form-nota-fiscal/form-nota-fiscal.component';
@Component({
  selector: 'app-tabela-notas-ficais',
  templateUrl: './tabela-notas-ficais.component.html',
  styleUrls: ['./tabela-notas-ficais.component.scss']
})
export class TabelaNotasFicaisComponent implements OnInit {
  clientes:any;
  displayedColumns: string[] = ['id','valor',  'data_emissao', 'email' ,'parametros'];
  @Output() submitCadastroEmit = new EventEmitter()
  @Output() submitFilter = new EventEmitter()
  @Input() notaFiscal: NotaFiscal[] = [];
  dataSource: any;
  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<NotaFiscal>(this.notaFiscal);
  }
  faTrash = faTrashCan;
  faFile = faFile
  nome = new FormControl();

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor( private dialog: MatDialog) { }

  ngOnInit(): void {
    this.nome.valueChanges.subscribe((value: string) => this.submitedFilter(value))
  }

  submited(model: NotaFiscal) {
    this.submitCadastroEmit.emit(model);
  }

  submitedFilter(value: string){
    this.submitFilter.emit(value)
  }

  openDialog() {
    const dialogRef = this.dialog.open(FormNotaFiscalComponent, {
      width: '100%',
      maxWidth: '500px',
    })
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.submited(result);
      }
    })
  }
}
