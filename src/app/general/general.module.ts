import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralRoutingModule } from './general-routing.module';
import { SharedModule } from '../shared.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { MembrosComponent } from './components/membros/membros.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { ProjectCardComponent } from '../shared/components/project-card/project-card.component';
import { ListaProjetosComponent } from './components/projetos/lista-projetos/lista-projetos.component';
import { ProjetoComponent } from './components/projetos/projeto/projeto.component';
import { ViewInfoLaboratorioComponent } from '../shared/components/view-info-laboratorio/view-info-laboratorio.component';

@NgModule({
  declarations: [
    LoginComponent,
    NoticiasComponent,
    MembrosComponent,
    SobreNosComponent,
    ProjectCardComponent,
    ListaProjetosComponent,
    ProjetoComponent,
    ViewInfoLaboratorioComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NoticiasComponent
  ]
})
export class GeneralModule {}
