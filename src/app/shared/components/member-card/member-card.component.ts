import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss'],
})
export class MemberCardComponent {
  @Input() id: string = '';
  @Input() name: string = 'Nome completo do membro';
  @Input() tipo_papel: string = 'papel do membro';
  @Input() image: string =
    'https://images.unsplash.com/photo-1504600770771-fb03a6961d33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3F1YXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60';

  }
