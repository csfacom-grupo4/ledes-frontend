import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-circle-button',
  templateUrl: './circle-button.component.html',
  styleUrls: ['./circle-button.component.scss'],
})
export class CircleButtonComponent {
  @Input({ required: true }) action!: 'edit' | 'delete';
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  onClicked() {
    this.buttonClick.emit();
  }
}
