import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-financiamiento',
  templateUrl: './financiamiento.component.html',
  styleUrls: ['./financiamiento.component.css']
})
export class FinanciamientoComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  becasInternas() {
    this.router.navigate([this.router.url.split("#")[0]], {fragment: 'becas-duoc'});
  }
}
