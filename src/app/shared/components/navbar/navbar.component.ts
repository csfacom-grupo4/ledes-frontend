import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  items: any = [
    { page: 'Notícias', route: ['general/noticias'] },
    { page: 'Projetos', route: ['general/projetos'] },
    { page: 'Membros', route: ['general/membros'] },
    { page: 'Sobre nós', route: ['general/sobre-nos'] },
  ];

  links: any = [
    { page: 'Gerenciar Usuários', route: ['management/usuarios'] },
    { page: 'Gerenciar Notícias', route: ['management/noticias'] },
    { page: 'Gerenciar Projetos', route: ['management/projetos'] },
    {
      page: 'Gerenciar Página do Laboratório',
      route: ['management/sobre-nos'],
    },
    {
      page: 'Gerenciar Papéis e Vínculos',
      route: ['management/papeis-e-vinculos'],
    },
    { page: 'Gerenciar Dados Pessoais', route: ['management/dados-pessoais'] },
  ];
}
