import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WidgetsModule } from '@proshore-ng-test/widgets';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, WidgetsModule, AppRoutingModule, BrowserAnimationsModule, MatDialogModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
