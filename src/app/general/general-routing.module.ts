import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { MembrosComponent } from './components/membros/membros.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';

const generalRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'membros', component: MembrosComponent },
  { path: 'projetos', component: ProjetosComponent },
  { path: 'sobre-nos', component: SobreNosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(generalRoutes)],
  exports: [RouterModule],
})
export class GeneralRoutingModule {}
