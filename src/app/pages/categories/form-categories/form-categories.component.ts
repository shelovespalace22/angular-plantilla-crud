import { Component, Input  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../../../core/services/categories.service';


@Component({
  selector: 'app-form-categories',
  standalone: true,
  imports: [CommonModule, NgbModalModule, ReactiveFormsModule],
  templateUrl: './form-categories.component.html',
  styleUrl: './form-categories.component.css'
})
export class FormCategoriesComponent {
  @Input() type: 'create' | 'edit' = 'create';
  @Input() data: any = null;
  @Input() saved: () => void = () => {};

  form!: FormGroup;

  fields = [
    {
      label: 'Nombre',
      property: 'name',
      type: 'text'
    }
  ];

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private service: CategoriesService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: [this.data?.name || '', Validators.required]
    });
  }

  save() {
    const formData = this.form.value;
    const request = this.type === 'edit'
      ? this.service.updateCategory(this.data.id, formData)
      : this.service.createCategory(formData);

    request.subscribe(() => {
      this.saved();
      this.activeModal.close();
    });
  }

  cancel() {
    this.activeModal.dismiss();
  }

  getColClass(count: number) {
    return count === 1 ? 'col-12' : count === 2 ? 'col-6' : 'col-4';
  }
}
