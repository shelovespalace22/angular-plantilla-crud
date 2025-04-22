import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BaseTableComponent } from '../base-table/base-table.component';
import { BaseFormComponent } from '../base-form/base-form.component';

@Component({
  selector: 'app-base-crud',
  standalone: true,
  imports: [CommonModule, NgbModalModule, BaseTableComponent],
  templateUrl: './base-crud.component.html'
})
export class BaseCrudComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() columns: any[] = [];
  @Input() formFields: any[] = [];
  @Input() service: any;

  @ViewChild(BaseTableComponent) tableComponent!: BaseTableComponent;

  constructor(private modal: NgbModal) {}

  openForm() {
    const ref = this.modal.open(BaseFormComponent);
    ref.componentInstance.type = 'create';
    ref.componentInstance.data = null;
    ref.componentInstance.formFields = this.formFields;
    ref.componentInstance.service = this.service;
    ref.componentInstance.saved = () => {
      this.tableComponent.loadData();
    };
  }
}
