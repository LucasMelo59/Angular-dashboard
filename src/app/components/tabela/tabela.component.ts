import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ClienteService } from '../../pages/cliente/cliente.service';
import { Cliente } from '../../model/entity/cliente';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';


const ELEMENT_DATA: any[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 12, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 13, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 14, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 15, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 16, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 17, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 18, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 19, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 20, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['cnpj','razao_social',  'tipoRegimeTributario', 'email'];
  @Output() submitCadastroEmit = new EventEmitter()

  Clientes: Cliente[] = [];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  nome = new FormControl();

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;


    // const teste = {
    //   razao_social: null
    // }
    // this.service.findByRazaoSocial(teste)
    // .subscribe(
    //   {
    //     next: (res: any) => {
    //       this.dataSource = new MatTableDataSource<any>(res)
    //     console.log(res);

    //     }

    //   }
    // )
  }
  constructor(private service: ClienteService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  submited(model: Cliente) {
    this.submitCadastroEmit.emit(model);
  }

  openDialog() {
    const dialogRef = this.dialog.open(FormComponent, {
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
