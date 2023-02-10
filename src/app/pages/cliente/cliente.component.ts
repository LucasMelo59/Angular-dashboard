import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  constructor(private service: ClienteService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(res => console.log(res));
    // this.spinner.show();

    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 2000);
  }
}
