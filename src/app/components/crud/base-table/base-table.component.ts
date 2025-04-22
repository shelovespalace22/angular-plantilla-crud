// base-table.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseActionsComponent } from '../base-actions/base-actions.component';

@Component({
  selector: 'app-base-table',
  standalone: true,
  imports: [CommonModule, FormsModule, BaseActionsComponent],
  templateUrl: './base-table.component.html'
})
export class BaseTableComponent {
  @Input() columns: any[] = [];
  @Input() formFields: any[] = [];
  @Input() service: any;

  data: any[] = [];
  search = '';
  page = 1;
  perPage = 5;
  timer: any;

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
    this.service.getRegisters(params).subscribe((res: any) => {
      this.data = res.data;
    });
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
    }, 500);
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
