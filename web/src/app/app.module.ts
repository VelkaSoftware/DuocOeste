import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FinanciamientoComponent } from './financiamiento/financiamiento.component';
import { AsuntosestudiantilesComponent } from './asuntosestudiantiles/asuntosestudiantiles.component';
import { PastoralComponent } from './pastoral/pastoral.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TopBarComponent,
    FinanciamientoComponent,
    AsuntosestudiantilesComponent,
    PastoralComponent
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
