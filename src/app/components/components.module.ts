import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NumberOfCustomersComponent } from './number-of-customers/number-of-customers.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';
import { CustomersByTypeTaxationComponent } from './customers-by-type-taxation/customers-by-type-taxation.component';
import { RouterModule } from '@angular/router';
import { TabelaComponent } from './tabela-clientes/tabela.component';
import { MaterialModule } from '../../assets/modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { TabelaNotasFicaisComponent } from './tabela-notas-ficais/tabela-notas-ficais.component';
import { FormNotaFiscalComponent } from './form-nota-fiscal/form-nota-fiscal.component';
import { FormComponent } from './form-clientes/form.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent,
    TopWidgetsComponent,
    CustomersByTypeTaxationComponent,
    NumberOfCustomersComponent,
    TabelaComponent,
    FormComponent,
    TabelaNotasFicaisComponent,
    FormNotaFiscalComponent,
  ],
  imports: [
    CommonModule,
    ChartModule,
    FontAwesomeModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    SideNavComponent,
    TopWidgetsComponent,
    NumberOfCustomersComponent,
    CustomersByTypeTaxationComponent,
    TabelaComponent,
    FormComponent,
    TabelaNotasFicaisComponent
  ]
})
export class ComponentsModule { }
