import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AsuntosEstudiantilesComponent} from "./asuntos-estudiantiles/asuntos-estudiantiles.component";
import {DeportesComponent} from "./deportes/deportes.component";
import {ApoyoYBienestarEstudiantilComponent} from "./apoyo-y-bienestar-estudiantil/apoyo-y-bienestar-estudiantil.component";
import {DesarrolloLaboralComponent} from "./desarrollo-laboral/desarrollo-laboral.component";
import {FinanciamientoComponent} from "./financiamiento/financiamiento.component";
import {PastoralComponent} from "./pastoral/pastoral.component";


const routes: Routes = [
  {
    path: 'financiamiento',
    component: FinanciamientoComponent,
  },
  {
    path: 'asuntos',
    component: AsuntosEstudiantilesComponent
  },

  {
    path: 'pastoral',
    component: PastoralComponent
  },

  {
    path: 'desarrollo-laboral',
    component: DesarrolloLaboralComponent
  },

  {
    path: 'deportes',
    component: DeportesComponent
  },

  {
    path: 'apoyo-y-bienestar-estudiantil',
    component: ApoyoYBienestarEstudiantilComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartamentoRoutingModule {
}
