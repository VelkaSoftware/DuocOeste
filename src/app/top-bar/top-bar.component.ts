import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  getTitle() {
    let url = this.normalizeUrl(this.router.url);
    switch (url) {
      case "pastoral":
        return "PASTORAL";
      case "desarrollo-laboral":
        return "DESARROLLO LABORAL";
      case "apoyo-y-bienestar-estudiantil":
        return "APOYO Y BIENESTAR ESTUDIANTIL";
      case "deportes":
        return "DEPORTE Y ACTIVIDAD FÍSICA";
      case "asuntos":
        return "ASUNTOS ESTUDIANTILES";
      case "financiamiento":
        return "FINANCIAMIENTO";
      default:
        return url;
    }
  }

  normalizeUrl(url: string) {
    return url.replace('/', '');
  }

  dashboard() {
    this.router.navigate(['/']);
  }
}
