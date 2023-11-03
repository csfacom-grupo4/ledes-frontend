import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralRoutingModule } from './general-routing.module';
import { SharedModule } from '../shared.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { MembrosComponent } from './components/membros/membros.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { ProjectCardComponent } from '../shared/components/project-card/project-card.component';

@NgModule({
  declarations: [
    LoginComponent,
    NoticiasComponent,
    ProjetosComponent,
    MembrosComponent,
    SobreNosComponent,
    ProjectCardComponent,
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class GeneralModule {}
