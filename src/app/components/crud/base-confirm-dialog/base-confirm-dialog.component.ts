import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-base-confirm-dialog',
  standalone: true,
  imports: [CommonModule, NgbModalModule],
  templateUrl: './base-confirm-dialog.component.html'
})
export class BaseConfirmDialogComponent {
  @Input() title = 'Confirmar acción';
  @Input() message = '¿Estás seguro que deseas continuar?';
  @Output() confirmed = new EventEmitter<void>();

  constructor(public activeModal: NgbActiveModal) {}

  confirm() {
    this.confirmed.emit();
    this.activeModal.close();
  }

  cancel() {
    this.activeModal.dismiss();
  }
}
