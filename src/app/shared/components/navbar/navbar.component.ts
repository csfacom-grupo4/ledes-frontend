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
}
