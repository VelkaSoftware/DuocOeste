import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {FinanciamientoComponent} from "./financiamiento/financiamiento.component";
import {AsuntosestudiantilesComponent} from "./asuntosestudiantiles/asuntosestudiantiles.component";
import {PastoralComponent} from "./pastoral/pastoral.component";
import {DesarrolloComponent} from "./desarrollo/desarrollo.component";
import {DeportesComponent} from "./deportes/deportes.component";
import {ApoyoComponent} from "./apoyo/apoyo.component";


const routes: Routes = [
  {
    path: 'inicio',
    redirectTo: '/'
  },
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'financiamiento',
    component: FinanciamientoComponent,
  },
  {
    path: 'asuntos',
    component: AsuntosestudiantilesComponent
  },

  {
    path: 'pastoral',
    component: PastoralComponent
  },

  {
    path: 'desarrollo',
    component: DesarrolloComponent
  },

  {
    path: 'deportes',
    component: DeportesComponent
  },

  {
    path: 'apoyo',
    component: ApoyoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
