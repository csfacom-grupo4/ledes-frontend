import { CadastroUsuarioComponent } from './components/usuarios/cadastro-usuario/cadastro-usuario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementRoutingModule } from './management-routing.module';
import { SharedModule } from '../shared.module';
import { ListaUsuariosComponent } from './components/usuarios/lista-usuarios/lista-usuarios.component';
import { GerenciarPapelVinculoComponent } from './components/gerenciar-papel-vinculo/gerenciar-papel-vinculo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaProjetosComponent } from './components/projetos/lista-projetos/lista-projetos.component';
import { CadastroProjetoComponent } from './components/projetos/cadastro-projeto/cadastro-projeto.component';
import { ListaNoticiasComponent } from './components/noticias/lista-noticias/lista-noticias.component';
import { CadastroNoticiaComponent } from './components/noticias/cadastro-noticia/cadastro-noticia.component';
import { EdicaoSobreNosComponent } from './components/sobre-nos/edicao-sobre-nos/edicao-sobre-nos.component';

@NgModule({
  declarations: [
    CadastroUsuarioComponent,
    ListaUsuariosComponent,
    GerenciarPapelVinculoComponent,
    ListaProjetosComponent,
    CadastroProjetoComponent,
    ListaNoticiasComponent,
    CadastroNoticiaComponent,
    EdicaoSobreNosComponent,
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
