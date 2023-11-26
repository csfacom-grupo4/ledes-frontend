import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-info-laboratorio',
  templateUrl: './view-info-laboratorio.component.html',
  styleUrls: ['./view-info-laboratorio.component.scss']
})
export class ViewInfoLaboratorioComponent {
@Input() sobreNos: any;

}
