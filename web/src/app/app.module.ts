import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FinanciamientoComponent } from './financiamiento/financiamiento.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TopBarComponent,
    FinanciamientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
