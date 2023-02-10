import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentTemplate } from './template/home/home.component';
import { HomeComponent } from './pages/home/home.component';
import { ClienteComponent } from './pages/cliente/cliente.component';

const routes: Routes = [{
  path: "dashboard" , component: HomeComponentTemplate, children:[
    {path: '', component: HomeComponent}
  ]
},
{
  path: "clientes", component: HomeComponentTemplate, children: [
    {path: '', component: ClienteComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
