import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { HomeComponentTemplate } from './template/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from '../assets/modules/material.module';
import { CadastroClientesComponent } from './pages/cadastro-clientes/cadastro-clientes.component';
import { ToastrModule } from 'ngx-toastr';
import { NotasFicaisComponent } from './pages/notas-ficais/notas-ficais.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentTemplate,
    HomeComponent,
    ClienteComponent,
    CadastroClientesComponent,
    NotasFicaisComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    ComponentsModule,
    FontAwesomeModule,
    RouterModule,
    HttpClientModule,
    NgxSpinnerModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
