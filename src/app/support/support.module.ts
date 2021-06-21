import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SupportRoutingModule } from './support-routing.module';
import { SupportPageComponent } from './components/support-page/support-page.component';
import { SupportPageContainer } from './containers/support-page/support-page.container';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';
import { OptionLabelPipe } from './pipes/option-label.pipe';


@NgModule({
  declarations: [
    SupportPageComponent,
    SupportPageContainer,
    CustomSelectComponent,
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
