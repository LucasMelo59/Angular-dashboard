import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() submitCadastroEmit = new EventEmitter()
  cadastroForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.cadastroForm =  this.formBuilder.group(
      {
        razaoSocial: [''],
        cnpj: [''],
        tipoRegimeTributario: [''],
        email: ['']
      }
    )
  }

}
