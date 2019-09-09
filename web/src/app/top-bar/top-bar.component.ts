import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

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
      case "inicio":
        return "";
      case "pastoral":
        return "Pastoral";
      case "desarrollo":
        return "Desarrollo laboral";
      default:
        return url;
    }
  }

  normalizeUrl(url: string) {
    return url.replace('/', '');
  }

}
