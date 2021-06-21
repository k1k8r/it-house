import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AuthModule } from '../auth';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    AuthModule.forRoot(),
  ],
})
export class CoreModule { }
