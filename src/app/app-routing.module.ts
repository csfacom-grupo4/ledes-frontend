import { CadastroUsuarioComponent } from './features/usuarios/cadastro-usuario/cadastro-usuario.component';
import { ListaUsuariosComponent } from './features/usuarios/lista-usuarios/lista-usuarios.component';
import { LoginComponent } from './features/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    component: ListaUsuariosComponent,
  },
  {
    path: 'add-user',
    component: CadastroUsuarioComponent,
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
