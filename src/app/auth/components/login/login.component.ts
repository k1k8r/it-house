import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  @Output() public formData = new EventEmitter();

  public signInForm!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
  ) {}

  public ngOnInit(): void {
    this._createForm();
  }

  public submit(): void {
    this.formData.emit(this.signInForm.value);
  }

  private _createForm(): void {
    this.signInForm = this._formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

}
