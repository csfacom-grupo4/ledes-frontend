import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
})
export class ListCardComponent {
  @Input() text!: string;
  @Input() isEdit: boolean = true;
  @Output() buttonEdit: EventEmitter<void> = new EventEmitter<void>();
  @Output() buttonDelete: EventEmitter<void> = new EventEmitter<void>();

  onEdit() {
    this.buttonEdit.emit();
  }
  onDelete() {
    this.buttonDelete.emit();
  }
}
