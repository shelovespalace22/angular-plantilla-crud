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
    path: '',
    redirectTo: 'categories',
    pathMatch: 'full'
  }
];
