import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ProfileService } from '../../services/profile.service';
import { IProfile } from '../../intefaces';

@Component({
  selector: 'app-profile-page-container',
  templateUrl: './profile-page.container.html',
  styleUrls: ['./profile-page.container.scss'],
})
export class ProfilePageContainer implements OnInit {

  public profileData$!: Observable<IProfile>;

  constructor(private _profileService: ProfileService) { }

  public ngOnInit(): void {
    this._getProfile();
  }

  public submit(formData: IProfile): void {
    this._profileService.update(formData)
      .subscribe((value) => value);
  }

  private _getProfile(): void {
    this.profileData$ = this._profileService.get();
  }
}
