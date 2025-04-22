import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-base-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgbModalModule],
  templateUrl: './base-form.component.html'
})
export class BaseFormComponent {
  @Input() type: 'create' | 'edit' = 'create';
  @Input() data: any = null;
  @Input() formFields: any[] = [];
  @Input() service: any;
  @Input() saved: () => void = () => {};

  form!: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    const controls: any = {};
    for (const field of this.formFields) {
      controls[field.property] = [this.data?.[field.property] || '', Validators.required];
    }
    this.form = this.fb.group(controls);
  }

  save() {
    const formData = this.form.value;
    const request = this.type === 'edit'
      ? this.service.update(this.data.id, formData)
      : this.service.create(formData);

    request.subscribe(() => {
      this.saved();
      this.activeModal.close();
    });
  }

  cancel() {
    this.activeModal.dismiss();
  }
}
