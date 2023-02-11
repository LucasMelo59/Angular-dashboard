import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormComponent } from '../form-clientes/form.component';
import { MatDialogRef } from '@angular/material/dialog';
import { NotaFiscal } from '../../model/entity/notaFiscal';

@Component({
  selector: 'app-form-nota-fiscal',
  templateUrl: './form-nota-fiscal.component.html',
  styleUrls: ['./form-nota-fiscal.component.scss']
})
export class FormNotaFiscalComponent implements OnInit {
  clientes: any;
  cadastroForm!: FormGroup;
  submitted: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<FormComponent>,
  )
     { }

  ngOnInit(): void {
    this.cadastroForm =  this.formBuilder.group(
      {
        valor_nota: ['',[ Validators.required]],
        data_emissao: ['', Validators.required] ,
        cliente: ['', Validators.required]
      }
    )
  }

  submit(){
    const model: NotaFiscal = {
      valor: this.cadastroForm.get('valor_nota')?.value,
      data_emissao: this.cadastroForm.get('data_emissao')?.value,
      cliente_id: this.cadastroForm.get('cliente')?.value,
    }
    this.submitted = true;
    this.dialogRef.close(model)
  }
}
