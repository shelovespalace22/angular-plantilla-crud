import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {
  protected baseUrl = environment.base_url;

  constructor(protected http: HttpClient) {}

  getAll(endpoint: string, options = {}) {
    return this.http.get(`${this.baseUrl}${endpoint}`, options);
  }

  getOne(endpoint: string, id: number | string, options = {}) {
    return this.http.get(`${this.baseUrl}${endpoint}/${id}`, options);
  }

  post(endpoint: string, data: any, options = {}) {
    return this.http.post(`${this.baseUrl}${endpoint}`, data, options);
  }

  put(endpoint: string, id: number | string, data: any, options = {}) {
    return this.http.put(`${this.baseUrl}${endpoint}/${id}`, data, options);
  }

  patch(endpoint: string, id: number | string, data: any, options = {}) {
    return this.http.patch(`${this.baseUrl}${endpoint}/${id}`, data, options);
  }

  delete(endpoint: string, id: number | string, options = {}) {
    return this.http.delete(`${this.baseUrl}${endpoint}/${id}`, options);
  }
}
