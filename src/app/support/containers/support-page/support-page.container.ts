import { Component, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ISupport } from '../../interfaces/support.interface';
import { SupportService } from '../../services/support.service';

@Component({
  selector: 'app-support-page-container',
  templateUrl: './support-page.container.html',
})
export class SupportPageContainer implements OnDestroy {

  private readonly destroy$ = new Subject<void>();

  constructor(private _supportService: SupportService) { }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public submit(formData: ISupport): void {
    this._supportService.send(formData)
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe(() => {});
  }

}
