import { GerenciarPapelVinculoComponent } from './gerenciar-papel-vinculo/gerenciar-papel-vinculo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';

const managementRoutes: Routes = [
  { path: 'usuarios', component: ListaUsuariosComponent },
  { path: 'papeis-e-vinculos', component: GerenciarPapelVinculoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(managementRoutes)],
  exports: [RouterModule],
})
export class ManagementRoutingModule {}
