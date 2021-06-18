import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SupportService } from '../../services/support.service';
import { ISection } from '../../interfaces/section.interface';

@Component({
  selector: 'app-support-page-container',
  templateUrl: './support-page.container.html',
})
export class SupportPageContainer implements OnInit, OnDestroy {

  public sections$!: Observable<ISection[]>;
  private readonly _destroy$ = new Subject<void>();

  constructor(private _supportService: SupportService) {}

  public ngOnInit(): void {
    this.list();
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public list(): void {
    this.sections$ = this._supportService.list();
  }

  public submit(formData: FormData): void {
    this._supportService.send(formData)
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe(() => {});
  }

}
