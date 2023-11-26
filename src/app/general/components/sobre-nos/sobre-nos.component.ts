import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.scss']
})
export class SobreNosComponent {
sobreNos={
  descricao: "texto descricao",
  endereco: "string",
  coordenadorLaboratorio: "Ricardo Kondo",
  emailCoordenador: "ricardo.kondo@ufms.br",
  telefoneLaboratorio: "(67) 3345-7532",
  segundaLaboratorioAbre: true,
  horarioSegundaAbertura: "08:00",
  horarioSegundaFechamento: "18:00",
  tercaLaboratorioAbre: true,
  horarioTercaAbertura: "08:00",
  horarioTercaFechamento: "18:00",
  quartaLaboratorioAbre: true,
  horarioQuartaAbertura: "08:00",
  horarioQuartaFechamento: "18:00",
  quintaLaboratorioAbre: true,
  horarioQuintaAbertura: "08:00",
  horarioQuintaFechamento: "18:00",
  sextaLaboratorioAbre: true,
  horarioSextaAbertura: "08:00",
  horarioSextaFechamento: "18:00",
  sabadoLaboratorioAbre: false,
  horarioSabadoAbertura: "08:00",
  horarioSabadoFechamento: "18:00",
  domingoLaboratorioAbre: false,
  horarioDomingoAbertura: "08:00",
  horarioDomingoFechamento: "18:00"
}
}
