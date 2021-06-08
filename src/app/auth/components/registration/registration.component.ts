import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {

  @Output() public formData = new EventEmitter();

  public signUpForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _authService: AuthService) {
  }

  public ngOnInit(): void {
    this._createForm();
  }

  public submit(): void {
    this.formData.emit(this.signUpForm.value);
    this._authService.back();
  }

  private _createForm(): void {
    this.signUpForm = this._formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password_repeat: ['', Validators.required],
    });
  }

}
