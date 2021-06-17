import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-support-page',
  templateUrl: './support-page.component.html',
  styleUrls: ['./support-page.component.scss'],
})
export class SupportPageComponent implements OnInit {

  @Output()
  public formData = new EventEmitter();

  public supportForm!: FormGroup;
  public sectionOptions: number[] = [1, 2, 3];

  constructor(private _formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
    this._createForm();
  }

  public onFileSelect(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.supportForm.get('file')?.setValue(file);
    }
  }

  public submit(): void {
    const formData = new FormData();
    const title = this.supportForm.get('title')?.value;
    const content = this.supportForm.get('content')?.value;
    const section = this.supportForm.get('section')?.value;
    const file = this.supportForm.get('file')?.value;

    formData.append('title', title);
    formData.append('content', content);
    formData.append('section', section);
    formData.append('file', file);
    this.formData.emit(formData);
  }

  private _createForm(): void {
    this.supportForm = this._formBuilder.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
      section: ['', [Validators.required]],
      file: [''],
    });
  }
}
