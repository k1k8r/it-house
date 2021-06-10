import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SupportRoutingModule } from './support-routing.module';
import { SupportPageComponent } from './components/support-page/support-page.component';
import { SupportPageContainer } from './containers/support-page/support-page.container';


@NgModule({
  declarations: [
    SupportPageComponent,
    SupportPageContainer,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SupportRoutingModule,
  ],
})
export class SupportModule { }
