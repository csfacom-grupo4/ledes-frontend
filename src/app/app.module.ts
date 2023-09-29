import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MemberCardComponent } from './shared/components/member-card/member-card.component';
import { CadastroUsuarioComponent } from './shared/components/cadastro-usuario/cadastro-usuario.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, NavbarComponent, FooterComponent, MemberCardComponent, CadastroUsuarioComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
