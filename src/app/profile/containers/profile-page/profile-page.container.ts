import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ProfileService } from '../../services/profile.service';
import { IProfile } from '../../intefaces';

@Component({
  selector: 'app-profile-page-container',
  templateUrl: './profile-page.container.html',
  styleUrls: ['./profile-page.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePageContainer implements OnInit, OnDestroy{

  public profileData$!: Observable<IProfile>;

  private readonly _destroy$ = new Subject<void>();

  constructor(private _profileService: ProfileService) { }

  public ngOnInit(): void {
    this._getProfile();
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public submit(formData: IProfile): void {
    this._profileService.update(formData)
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe((value) => value);
  }

  private _getProfile(): void {
    this.profileData$ = this._profileService.get();
  }
}
