import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {DocumentEditorContainerModule, DocumentEditorModule } from '@syncfusion/ej2-angular-documenteditor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DocumentEditorModule,
    DocumentEditorContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
