import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'categories',
    loadComponent: () =>
      import('./pages/categories/categories.component').then(
        m => m.CategoriesComponent
      )
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./pages/products/products.component').then(
        m => m.ProductsComponent
      )
  },
  {
    path: '',
    redirectTo: 'categories',
    pathMatch: 'full'
  }
];
