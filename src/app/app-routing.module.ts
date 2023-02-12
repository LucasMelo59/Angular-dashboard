import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentTemplate } from './template/home/home.component';
import { HomeComponent } from './pages/home/home.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { NotasFicaisComponent } from './pages/notas-ficais/notas-ficais.component';

const routes: Routes = [{
  path: "dashboard" , component: HomeComponentTemplate, children:[
    {path: '', component: HomeComponent}
  ]
},
{
  path: "clientes", component: HomeComponentTemplate, children: [
    {path: '', component: ClienteComponent}
  ]
},
{
  path: "notas-ficais", component: HomeComponentTemplate, children: [
    {path: '', component: NotasFicaisComponent}
  ]
},
{path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
