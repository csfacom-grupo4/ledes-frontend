import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-card-noticia',
  templateUrl: './list-card-noticia.component.html',
  styleUrls: ['./list-card-noticia.component.scss']
})
export class ListCardNoticiaComponent {
  @Input() texto!: string;
}


