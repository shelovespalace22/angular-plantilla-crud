// base-actions.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { LucideAngularModule, SquarePen, Trash } from 'lucide-angular';
import { BaseFormComponent } from '../base-form/base-form.component';
import { BaseConfirmDialogComponent } from '../base-confirm-dialog/base-confirm-dialog.component';

@Component({
  selector: 'app-base-actions',
  standalone: true,
  imports: [CommonModule, NgbModalModule, LucideAngularModule],
  templateUrl: './base-actions.component.html'
})
export class BaseActionsComponent {
  @Input() data: any;
  @Input() formFields: any[] = [];
  @Input() service: any;
  @Input() refresh: () => void = () => {};

  readonly SquarePen = SquarePen;
  readonly Trash = Trash;

  constructor(private modal: NgbModal) {}

  edit() {
    const ref = this.modal.open(BaseFormComponent);
    ref.componentInstance.type = 'edit';
    ref.componentInstance.data = this.data;
    ref.componentInstance.formFields = this.formFields;
    ref.componentInstance.service = this.service;
    ref.componentInstance.saved = this.refresh;
  }

  confirmDelete() {
    const ref = this.modal.open(BaseConfirmDialogComponent);
    ref.componentInstance.title = 'Confirmar Eliminación';
    ref.componentInstance.message = '¿Estás seguro de que deseas eliminar este registro?';
    ref.componentInstance.confirmed.subscribe(() => {
      this.service.delete(this.data.id).subscribe(() => {
        this.refresh();
      });
    });
  }
}
