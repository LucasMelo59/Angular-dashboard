import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  constructor(private service: ClienteService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(res => console.log(res))
  }



}
