import { Injectable } from '@angular/core';
import { WebApiService } from './web-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends WebApiService {
  private endpoint = 'products';

  getRegisters(params = {}) {
    return this.getAll(this.endpoint, params);
  }

  getRegister(id: number) {
    return this.getOne(this.endpoint, id);
  }

  createRegister(data: any) {
    return this.post(this.endpoint, data);
  }

  updateRegister(id: number, data: any) {
    return this.put(this.endpoint, id, data);
  }

  deleteRegister(id: number) {
    return this.delete(this.endpoint, id);
  }
}
