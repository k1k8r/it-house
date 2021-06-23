import { Component, ChangeDetectionStrategy } from '@angular/core';

import { AuthService } from '@auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  public isLogged = this._authService.isLogged;

  constructor(private _authService: AuthService) {
  }

}
