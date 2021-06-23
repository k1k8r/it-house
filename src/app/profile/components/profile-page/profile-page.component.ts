import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { AuthService } from '@auth/services/auth.service';

import { IProfile } from '../../intefaces';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePageComponent implements OnInit, OnChanges {
  @Input()
  public profileData!: IProfile | null;

  @Output()
  public formData = new EventEmitter();

  public profileForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _authService: AuthService) {}

  public ngOnInit(): void {
    this._createForm();
  }

  public ngOnChanges(): void {
    this._patchForm();
  }

  public submit(): void {
    this.formData.emit(this.profileForm.value);
  }

  public logout(): void {
    this._authService.logout();
  }

  private _createForm(): void {
    this.profileForm = this._formBuilder.group({
      firstname: [''],
      lastname: [''],
      phone: [''],
      age: [''],
      work_exp: [''],
      knowledge: [''],
      role: [''],
    });
  }

  private _patchForm(): void {
    if (this.profileData) {
      this.profileForm.patchValue({
        firstname: this.profileData.firstname,
        lastname: this.profileData.lastname,
        phone: this.profileData.phone,
        age: this.profileData.age,
        work_exp: this.profileData.work_exp,
        knowledge: this.profileData.knowledge,
        role: this.profileData.role,
      });
    }
  }

}
