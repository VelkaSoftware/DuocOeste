import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Tabla} from "./tabla";

@Component({
  selector: 'app-financiamiento',
  templateUrl: './financiamiento.component.html',
  styleUrls: ['./financiamiento.component.css']
})
export class FinanciamientoComponent implements OnInit {

  tablas: Map<string, Tabla[]> = new Map<string, Tabla[]>();

  constructor() {
    let becasDuoc: Tabla[] = [
      new Tabla(
        "Beca Segundo Hermano",
        "20",
        "Alumno que tenga un segundo hermano matriculado en alguna carrera de Duoc UC",
        "Presentar el certificado de nacimiento del alumno y el de su hermano(s) matriculado(s) en otra carrera de Duoc UC."),
      new Tabla(
        "Beca Tercer Hermano",
        "50",
        "Alumno que tenga un tercer hermano matriculado en alguna carrera de Duoc UC",
        "Presentar el certificado de nacimiento del alumno y el de su hermano(s) matriculado(s) en otra carrera de Duoc UC."),
      new Tabla(
        "Becas deportivas",
        "20 - 40",
        "Esta beca beneficiará con un 20% en su arancel a alumnos deportistas que representen a la institución en alguna de las ramas de selección Duoc UC o que pertenezcan a alguna federación deportiva de nuestro país. En tanto, si el estudiante participa en ambas instancias, el beneficio es de 40%.",
        "Los alumnos deportistas deben acercarse al Coordinador de Deportes de la sede o al entrenador de la selección a la que pertenecen para consultar respecto a la documentación necesaria u otros requisitos. Para postular, se debe acceder a http://www.duoc.cl/becasdeportiva y llenar el formulario. La asignación de esta beca está condicionada al cumplimiento de requisitos mínimos de notas y asistencia."),
      new Tabla(
        "BECA LICEO POLITÉCNICO ANDES",
        "30",
        "Destinada a egresados del Liceo Politécnico Andes",
        "Ser egresado del Liceo Politécnico Andes"
      ),
      new Tabla(
        "BECA MADRE O PADRE SOSTENEDOR",
        "100% del arancel semestral, excluida la matrícula",
        "Se otorga por el fallecimiento de Padre sostenedor o Madre sostenedora, válida por período de que dura la carrera y no es retroactiva",
        "Presentar el certificado de defunción respectivo"
      )
    ];
    this.tablas.set("Becas Duoc UC", becasDuoc);
  }

  ngOnInit() {
  }
}
