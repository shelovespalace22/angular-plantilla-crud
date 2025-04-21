import { Injectable } from '@angular/core';
import { WebApiService } from './web-api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends WebApiService {
  private endpoint = 'categories';

  getCategories() {
    return this.getAll(this.endpoint);
  }

  getCategory(id: number) {
    return this.getOne(this.endpoint, id);
  }

  createCategory(data: any) {
    return this.post(this.endpoint, data);
  }

  updateCategory(id: number, data: any) {
    return this.put(this.endpoint, id, data);
  }

  deletCategory(id: number) {
    return this.delete(this.endpoint, id);
  }
}
