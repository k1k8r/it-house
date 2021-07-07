import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SupportRoutingModule } from './support-routing.module';
import { SupportPageComponent, CustomSelectComponent } from './components';
import { SupportPageContainer } from './containers/support-page/support-page.container';
import { OptionLabelPipe } from './pipes/option-label.pipe';


@NgModule({
  declarations: [
    SupportPageComponent,
    CustomSelectComponent,
    SupportPageContainer,
    OptionLabelPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SupportRoutingModule,
    FormsModule,
  ],
})
export class SupportModule { }
