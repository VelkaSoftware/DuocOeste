import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CredentialComponent } from './credential/credential.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AreaDetailComponent } from './area-detail/area-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CredentialComponent,
    TopBarComponent,
    AreaDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
