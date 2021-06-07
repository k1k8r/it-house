import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  @Output() public formData = new EventEmitter();

  public signInForm = this._formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(private _formBuilder: FormBuilder) { }

  public ngOnInit(): void {
  }

  public submit(): void {
    this.formData.emit(this.signInForm.value);
  }

}
