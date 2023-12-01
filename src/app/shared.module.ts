import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './shared/components/header/header.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MemberCardComponent } from './shared/components/member-card/member-card.component';
import { ListCardComponent } from './shared/components/list-card/list-card.component';
import { CircleButtonComponent } from './shared/components/circle-button/circle-button.component';
import { FormUnitarioPapelVinculoComponent } from './shared/components/form-unitario-papel-vinculo/form-unitario-papel-vinculo.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CampoPesquisaComponent } from './shared/components/campo-pesquisa/campo-pesquisa.component';
import { ListCardNoticiaComponent } from './shared/components/list-card-noticia/list-card-noticia.component';
import { CircleButtonNoticiaComponent } from './shared/components/circle-button-noticia/circle-button-noticia.component';
@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    MemberCardComponent,
    ListCardComponent,
    CircleButtonComponent,
    FormUnitarioPapelVinculoComponent,
    CampoPesquisaComponent,
    ListCardNoticiaComponent,
    CircleButtonNoticiaComponent
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  providers: [],
  exports: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    MemberCardComponent,
    ListCardComponent,
    CircleButtonComponent,
    FormUnitarioPapelVinculoComponent,
    CampoPesquisaComponent,
    ListCardNoticiaComponent,
    CircleButtonNoticiaComponent
  ],
})
export class SharedModule {}
