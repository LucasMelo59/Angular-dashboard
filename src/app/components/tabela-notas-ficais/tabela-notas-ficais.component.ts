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
import { FormNotaFiscalComponent } from '../form-nota-fiscal/form-nota-fiscal.component';
import { ClienteDto } from '../../model/dto/clienteDto';
@Component({
  selector: 'app-tabela-notas-ficais',
  templateUrl: './tabela-notas-ficais.component.html',
  styleUrls: ['./tabela-notas-ficais.component.scss']
})
export class TabelaNotasFicaisComponent implements OnInit {
  cliente!:any;
  @Input() clientes: any[] = [];
  displayedColumns: string[] = ['id','valor',  'data_emissao' ,'parametros'];
  @Output() submitCadastroEmit = new EventEmitter()
  @Output() submitFilter = new EventEmitter()
  @Output() submitDelete = new EventEmitter()
  @Input() notaFiscal: NotaFiscal[] = [];
  dataSource: any;

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<NotaFiscal>(this.notaFiscal);
  }

  faTrash = faTrashCan;
  faFile = faFile
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor( private dialog: MatDialog) { }

  ngOnInit(): void {
    // this.cliente.valueChanges.subscribe((value: any) => this.submitedFilter(value))
  }

  submited(model: NotaFiscal) {
    this.submitCadastroEmit.emit(model);
  }

  submitedFilter(value: any){
    this.submitFilter.emit(value.target.value)
  }

  submitedDelete(model: any) {
    this.submitDelete.emit(model.id);
    this.notaFiscal = this.notaFiscal.filter((x) => x.id !== model.id);
    this.dataSource = new MatTableDataSource<NotaFiscal>(this.notaFiscal);
  }

  openDialog() {
    const dialogRef = this.dialog.open(FormNotaFiscalComponent, {
      width: '100%',
      maxWidth: '500px',
      data: this.clientes
    })
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.submited(result);
        this.notaFiscal.push(result)
        this.dataSource = new MatTableDataSource<NotaFiscal>(this.notaFiscal);
      }
    })
  }
}
