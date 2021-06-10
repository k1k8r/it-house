import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-support-page',
  templateUrl: './support-page.component.html',
  styleUrls: ['./support-page.component.scss'],
})
export class SupportPageComponent implements OnInit {

  @Output()
  public formData = new EventEmitter<any>();

  public supportForm!: FormGroup;

  public sectionOptions: string[] = ['Запрос об ошибке', 'Предложение по проекту', 'Отзыв'];

  constructor(private _formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this._createForm();
  }

  public submit(): void {
    this.formData.emit(this.supportForm.value);
  }

  private _createForm(): void {
    this.supportForm = this._formBuilder.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
      section: ['', [Validators.required]],
      file: [File],
    });
  }

}
