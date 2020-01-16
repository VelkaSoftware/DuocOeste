import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {FinanciamientoComponent} from './financiamiento/financiamiento.component';
import {AsuntosestudiantilesComponent} from './asuntosestudiantiles/asuntosestudiantiles.component';
import {PastoralComponent} from './pastoral/pastoral.component';
import {DesarrolloComponent} from './desarrollo/desarrollo.component';
import {ApoyoComponent} from './apoyo/apoyo.component';
import {DeportesComponent} from './deportes/deportes.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatTreeModule} from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TopBarComponent,
    FinanciamientoComponent,
    AsuntosestudiantilesComponent,
    PastoralComponent,
    DesarrolloComponent,
    ApoyoComponent,
    DeportesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    BrowserAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatTreeModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


