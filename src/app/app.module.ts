import { SharedModule } from './shared.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagementModule } from './management/management.module';
import { GeneralModule } from './general/general.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ManagementModule,
    GeneralModule,
    SharedModule,
    HttpClientModule,
    AngularEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
