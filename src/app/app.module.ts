import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { LayoutModule } from './layout';
import { NotImplementedPageComponent } from './not-implemented-page/not-implemented-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NotImplementedPageComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    LayoutModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
