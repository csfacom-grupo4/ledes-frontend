import { CadastroUsuarioComponent } from './components/usuarios/cadastro-usuario/cadastro-usuario.component';
import { GerenciarPapelVinculoComponent } from './components/gerenciar-papel-vinculo/gerenciar-papel-vinculo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './components/usuarios/lista-usuarios/lista-usuarios.component';
import { CadastroNoticiaComponent } from './components/noticias/cadastro-noticia/cadastro-noticia.component';
import { ListaNoticiasComponent } from './components/noticias/lista-noticias/lista-noticias.component';
import { CadastroProjetoComponent } from './components/projetos/cadastro-projeto/cadastro-projeto.component';
import { ListaProjetosComponent } from './components/projetos/lista-projetos/lista-projetos.component';
import { EdicaoSobreNosComponent } from './components/sobre-nos/edicao-sobre-nos/edicao-sobre-nos.component';
import { DadosPessoaisComponent } from './components/dados-pessoais/dados-pessoais.component';

const managementRoutes: Routes = [
  { path: 'usuarios', component: ListaUsuariosComponent },
  { path: 'cadastrar-usuario', component: CadastroUsuarioComponent },
  { path: 'papeis-e-vinculos', component: GerenciarPapelVinculoComponent },
  { path: 'noticias', component: ListaNoticiasComponent },
  { path: 'cadastrar-noticia', component: CadastroNoticiaComponent },
  { path: 'projetos', component: ListaProjetosComponent },
  { path: 'cadastrar-projeto', component: CadastroProjetoComponent },
  { path: 'sobre-nos', component: EdicaoSobreNosComponent },
  { path: 'dados-pessoais', component: DadosPessoaisComponent },
];

@NgModule({
  imports: [RouterModule.forChild(managementRoutes)],
  exports: [RouterModule],
})
export class ManagementRoutingModule {}
