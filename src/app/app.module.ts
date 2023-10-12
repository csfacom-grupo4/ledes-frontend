import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MemberCardComponent } from './shared/components/member-card/member-card.component';
import { CadastroUsuarioComponent } from './features/usuarios/cadastro-usuario/cadastro-usuario.component';
import { LoginComponent } from './features/login/login.component';
import { ListCardComponent } from './shared/components/list-card/list-card.component';
import { CircleButtonComponent } from './shared/components/circle-button/circle-button.component';
import { ListaUsuariosComponent } from './features/usuarios/lista-usuarios/lista-usuarios.component';
import { FormUnitarioPapelVinculoComponent } from './shared/components/form-unitario-papel-vinculo/form-unitario-papel-vinculo.component';
import { GerenciarPapelVinculoComponent } from './features/gerenciar-papel-vinculo/gerenciar-papel-vinculo.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    MemberCardComponent,
    CadastroUsuarioComponent,
    LoginComponent,
    ListCardComponent,
    CircleButtonComponent,
    ListaUsuariosComponent,
    FormUnitarioPapelVinculoComponent,
    GerenciarPapelVinculoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
