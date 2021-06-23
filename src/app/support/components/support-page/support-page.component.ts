import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SupportService } from '../../services/support.service';
import { ISection } from '../../interfaces/section.interface';

@Component({
  selector: 'app-support-page',
  templateUrl: './support-page.component.html',
  styleUrls: ['./support-page.component.scss'],
})
export class SupportPageComponent implements OnInit {

  @Input()
  public sections!: ISection[] | null;

  @Output()
  public formData = new EventEmitter();

  public supportForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _supportService: SupportService) {
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
    this.formData.emit(this.supportForm.value);
    this.supportForm.reset();
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
