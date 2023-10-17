import { CadastroUsuarioComponent } from './usuarios/cadastro-usuario/cadastro-usuario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementRoutingModule } from './management-routing.module';
import { SharedModule } from '../shared.module';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';
import { GerenciarPapelVinculoComponent } from './gerenciar-papel-vinculo/gerenciar-papel-vinculo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CadastroUsuarioComponent,
    ListaUsuariosComponent,
    GerenciarPapelVinculoComponent,
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ManagementModule {}
