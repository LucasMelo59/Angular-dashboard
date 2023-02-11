import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../../model/entity/cliente';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
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
        razao_social: ['', Validators.required],
        cnpj: ['', Validators.required] ,
        tipoRegimeTributario: ['', Validators.required],
        email: ['', Validators.required]
      }
    )
  }

  submit(){
    const model: Cliente = {
      razao_social: this.cadastroForm.get('razao_social')?.value,
      cnpj: this.cadastroForm.get('cnpj')?.value,
      tipo_regime_tributario: this.cadastroForm.get('tipoRegimeTributario')?.value,
      email: this.cadastroForm.get('email')?.value
    }
    this.submitted = true;
    console.log(model);
    this.dialogRef.close(model)
  }

}
