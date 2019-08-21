import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {FinanciamientoComponent} from "./financiamiento/financiamiento.component";
import {AsuntosestudiantilesComponent} from "./asuntosestudiantiles/asuntosestudiantiles.component";


const routes: Routes = [
  {
    path: 'inicio',
    component: DashboardComponent,
    data: {title: 'Inicio'}
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'financiamiento',
    component: FinanciamientoComponent,
  },
  {
    path: 'asuntos',
    component: AsuntosestudiantilesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
