import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal, NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [CommonModule, NgbModalModule],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css'
})
export class ConfirmDialogComponent {
  @Input() title: string = 'Confirmar acción';
  @Input() message: string = '¿Estás seguro que deseas continuar?';
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
