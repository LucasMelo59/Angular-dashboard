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
import { ToastrModule } from 'ngx-toastr';
import { NotasFicaisComponent } from './pages/notas-ficais/notas-ficais.component';
import { FormsModule } from '@angular/forms';
import { CNPJPipe } from 'src/assets/pipes/CNPJPipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentTemplate,
    HomeComponent,
    ClienteComponent,
    NotasFicaisComponent,
    
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
    ToastrModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
