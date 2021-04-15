import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidosComponent } from './pedidos/pedidos.component';
import { HomeComponent } from './home/home.component';




const routes: Routes = [
  {
    path: 'Home', component: HomeComponent
  },
  {
    path: 'NovoPedido', component: PedidosComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
