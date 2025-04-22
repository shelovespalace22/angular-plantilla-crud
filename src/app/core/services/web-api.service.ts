import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {
  protected baseUrl = environment.base_url;

  constructor(protected http: HttpClient) {}

  getAll(endpoint: string, params = {}) {
    return this.http.get(`${this.baseUrl}${endpoint}`, {params});
  }

  getOne(endpoint: string, id: number | string, params = {}) {
    return this.http.get(`${this.baseUrl}${endpoint}/${id}`, {params});
  }

  post(endpoint: string, data: any, params = {}) {
    return this.http.post(`${this.baseUrl}${endpoint}`, data, {params});
  }

  put(endpoint: string, id: number | string, data: any, params = {}) {
    return this.http.put(`${this.baseUrl}${endpoint}/${id}`, data, {params});
  }

  patch(endpoint: string, id: number | string, data: any, params = {}) {
    return this.http.patch(`${this.baseUrl}${endpoint}/${id}`, data, {params});
  }

  delete(endpoint: string, id: number | string, params = {}) {
    return this.http.delete(`${this.baseUrl}${endpoint}/${id}`, {params});
  }
}
