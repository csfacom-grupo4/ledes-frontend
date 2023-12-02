import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { MembrosComponent } from './components/membros/membros.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { ListaProjetosComponent } from './components/projetos/lista-projetos/lista-projetos.component';
import { ProjetoComponent } from './components/projetos/projeto/projeto.component';
import { MembroComponent } from './components/membros/membro/membro.component';

const generalRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'membros', component: MembrosComponent },
  { path: 'sobre-nos', component: SobreNosComponent },
  { path: 'projetos', component: ListaProjetosComponent },
  { path: 'projetos/:id', component: ProjetoComponent },
  { path: 'membros/:id', component: MembroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(generalRoutes)],
  exports: [RouterModule],
})
export class GeneralRoutingModule {}
