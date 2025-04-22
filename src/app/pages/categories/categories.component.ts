import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesService } from '../../core/services/categories.service';
import { FormCategoriesComponent } from './form-categories/form-categories.component';
import { CategoriesActionsComponent } from './categories-actions/categories-actions.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbModalModule, CategoriesActionsComponent],
  templateUrl: './categories.component.html'
})
export class CategoriesComponent {
  title = 'Gestión de Categorías';
  subtitle = 'Administra las categorías disponibles en el sistema';

  columns = [
    { title: 'ID', property: 'id', type: 'text' },
    { title: 'Nombre', property: 'name', type: 'text' },
    { title: 'Creado el', property: 'created_at', type: 'text' }
  ];

  data: any[] = [];
  search: string = '';
  page = 1;
  perPage = 5;
  totalItems = 0;
  timer: any;

  constructor(private service: CategoriesService, private modal: NgbModal) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    const params: any = {
      page: this.page,
      per_page: this.perPage
    };

    if (this.search.length >= 3) {
      params.search = this.search;
    }

    this.service.getAll('categories', params).subscribe((res: any) => {
      this.data = res.data;
    });
  }

  openForm() {
    const ref = this.modal.open(FormCategoriesComponent);
    ref.componentInstance.type = 'create';
    ref.componentInstance.data = null;
    ref.componentInstance.saved = this.loadData.bind(this);
  }

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.search = value;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      if (this.search.length >= 3 || this.search.length === 0) {
        this.page = 1;
        this.loadData();
      }
    }, 1000);
  }

  changePerPage(value: number) {
    this.perPage = value;
    this.page = 1;
    this.loadData();
  }

  changePage(value: number) {
    this.page = value;
    this.loadData();
  }
}
