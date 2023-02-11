import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ClienteService } from '../../pages/cliente/cliente.service';
import { Cliente } from '../../model/entity/cliente';
import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import {
  faTrashCan,
  faFile
} from '@fortawesome/free-solid-svg-icons';
import { FormComponent } from '../form-clientes/form.component';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['cnpj','razao_social',  'tipoRegimeTributario', 'email' ,'parametros'];
  @Output() submitCadastroEmit = new EventEmitter()
  @Output() submitFilter = new EventEmitter()
  @Output() submitDelete = new EventEmitter()
  @Input() Clientes: Cliente[] = [];
  dataSource: any;
  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<Cliente>(this.Clientes);
  }
  faTrash = faTrashCan;
  faFile = faFile
  nome = new FormControl();

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private service: ClienteService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.nome.valueChanges.subscribe((value: string) => this.submitedFilter(value))
  }

  submited(model: Cliente) {
    this.submitCadastroEmit.emit(model);
  }

  submitedFilter(value: string){
    this.submitFilter.emit(value)
  }

  submitedDelete(model: any) {
    this.submitDelete.emit(model);
    this.Clientes = this.Clientes.filter((x) => x.id !== model);
    this.dataSource = new MatTableDataSource<Cliente>(this.Clientes);
  }

  openDialog() {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '100%',
      maxWidth: '500px',
    })
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.submited(result);
        this.Clientes.push(result)
        this.dataSource = new MatTableDataSource<Cliente>(this.Clientes);
      }
    })
  }

}
