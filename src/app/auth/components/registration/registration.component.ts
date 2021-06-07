import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {

  @Output() public formData = new EventEmitter();

  public signUpForm = this._formBuilder.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    password_repeat: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
  }

  public submit(): void {
    this.formData.emit(this.signUpForm.value);
  }

}
