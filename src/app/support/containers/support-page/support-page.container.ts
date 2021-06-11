import { Component, OnInit } from '@angular/core';

import { ISupport } from '../../interfaces/support.interface';
import { SupportService } from '../../services/support.service';
@Component({
  selector: 'app-support-page-container',
  templateUrl: './support-page.container.html',
})
export class SupportPageContainer implements OnInit {

  constructor(private _supportService: SupportService) { }

  public ngOnInit(): void {
  }

  public submit(formData: ISupport): void {
    this._supportService.send(formData)
      .subscribe((value) => console.log(value));
  }

}
