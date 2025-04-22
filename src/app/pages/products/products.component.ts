import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../core/services/products.service';
import { CategoriesService } from '../../core/services/categories.service';
import { BaseCrudComponent } from '../../components/crud/base-crud/base-crud.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, BaseCrudComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  title = 'Gestión de Productos';
  subtitle = 'Administra los productos disponibles en el sistema';
  columns = [
    { title: 'ID', property: 'id', type: 'text' },
    { title: 'Nombre', property: 'name', type: 'text' },
    { title: 'Precio', property: 'price', type: 'text' },
    { title: 'Categoría', property: 'category', type: 'text' },
    { title: 'Creado el', property: 'created_at', type: 'text' }
  ];
  fields: any;
  categories: [] = [];

  constructor(public productsService: ProductsService, private categoriesService: CategoriesService) {}

  async ngOnInit() {
    await this.categoriesService.getRegisters().subscribe((res:any) => {
      this.categories = res.data;
      this.initializeFields();
    });
  }

  private initializeFields() {
    this.fields = [
      { label: 'Nombre', property: 'name', type: 'text' },
      { label: 'Precio', property: 'price', type: 'text' },
      { label: 'Categoría', property: 'category_id', type: 'select', options: this.categories},
    ];
  }
}
