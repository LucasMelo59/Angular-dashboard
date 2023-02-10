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
import { TabelaComponent } from './tabela/tabela.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent,
    TopWidgetsComponent,
    CustomersByTypeTaxationComponent,
    NumberOfCustomersComponent,
    TabelaComponent,
  ],
  imports: [
    CommonModule,
    ChartModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SideNavComponent,
    TopWidgetsComponent,
    NumberOfCustomersComponent,
    CustomersByTypeTaxationComponent,
    TabelaComponent
  ]
})
export class ComponentsModule { }
