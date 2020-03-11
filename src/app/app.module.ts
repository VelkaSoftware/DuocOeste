import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DepartamentoModule} from "./departamento/departamento.module";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DepartamentoModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


