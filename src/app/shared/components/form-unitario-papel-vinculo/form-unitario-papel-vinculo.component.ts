
import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-form-unitario-papel-vinculo',
  templateUrl: './form-unitario-papel-vinculo.component.html',
  styleUrls: ['./form-unitario-papel-vinculo.component.scss']
})
export class FormUnitarioPapelVinculoComponent {


  @Input() buttonText: string = 'Enviar';
  @Input() placeholderText: string = 'Digite o texto';
  @Input() apiURL: string = '';

  @Output() onSubmit = new EventEmitter<string>();

  inputValue: string = '';

  submitForm() {
    // Aqui você pode implementar a lógica para enviar os dados para a API
    // Você pode usar this.apiURL e this.inputValue para isso
    // Em seguida, emitir um evento para notificar o componente pai
    this.onSubmit.emit(this.inputValue);
  }
}
