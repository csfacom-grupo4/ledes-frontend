import { LoginComponent } from './features/login/login.component';
import { CadastroUsuarioComponent } from './features/cadastro-usuario/cadastro-usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'user', component: CadastroUsuarioComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
