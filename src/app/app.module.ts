import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WidgetsModule } from '@proshore-ng-test/widgets';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, WidgetsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
