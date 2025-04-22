import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesService } from '../../core/services/categories.service';
import { BaseCrudComponent } from '../../components/crud/base-crud/base-crud.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, BaseCrudComponent],
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

  fields = [
    { label: 'Nombre', property: 'name', type: 'text' }
  ];

  constructor(public categoriesService: CategoriesService) {}
}
