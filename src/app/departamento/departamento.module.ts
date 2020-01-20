import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AsuntosEstudiantilesComponent} from "./asuntos-estudiantiles/asuntos-estudiantiles.component";
import {DepartamentoRoutingModule} from "./departamento-routing.module";
import {DeportesComponent} from "./deportes/deportes.component";
import {ApoyoYBienestarEstudiantilComponent} from "./apoyo-y-bienestar-estudiantil/apoyo-y-bienestar-estudiantil.component";
import {DesarrolloLaboralComponent} from "./desarrollo-laboral/desarrollo-laboral.component";
import {PastoralComponent} from "./pastoral/pastoral.component";
import {FinanciamientoComponent} from "./financiamiento/financiamiento.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTreeModule} from "@angular/material/tree";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";


@NgModule({
  declarations: [
    AsuntosEstudiantilesComponent,
    DeportesComponent,
    ApoyoYBienestarEstudiantilComponent,
    DesarrolloLaboralComponent,
    PastoralComponent,
    FinanciamientoComponent
  ],
  imports: [
    CommonModule,
    DepartamentoRoutingModule,
    MatFormFieldModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule
  ]
})
export class DepartamentoModule {
}
