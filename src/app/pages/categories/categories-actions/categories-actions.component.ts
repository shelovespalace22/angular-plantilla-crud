import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormCategoriesComponent } from '../form-categories/form-categories.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { CategoriesService } from '../../../core/services/categories.service';
import { LucideAngularModule, SquarePen, Trash } from 'lucide-angular';

@Component({
  selector: 'app-categories-actions',
  standalone: true,
  imports: [CommonModule, NgbModalModule, LucideAngularModule],
  templateUrl: './categories-actions.component.html'
})
export class CategoriesActionsComponent {
  @Input() data!: any;
  @Input() refresh!: () => void;

  readonly SquarePen = SquarePen;
  readonly Trash = Trash;

  constructor(private modal: NgbModal, private service: CategoriesService) {}

  edit() {
    const ref = this.modal.open(FormCategoriesComponent);
    ref.componentInstance.type = 'edit';
    ref.componentInstance.data = this.data;
    ref.componentInstance.saved = this.refresh;
  }

  confirmDelete() {
    const ref = this.modal.open(ConfirmDialogComponent);
    ref.componentInstance.title = 'Eliminar categoría';
    ref.componentInstance.message = '¿Deseas eliminar este registro?';
    ref.componentInstance.confirmed.subscribe(() => {
      this.service.deletCategory(this.data.id).subscribe(() => {
        this.refresh();
      });
    });
  }
}
