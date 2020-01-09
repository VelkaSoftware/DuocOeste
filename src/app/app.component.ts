import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (window.pageYOffset == 0) {
        document.getElementById("top-bar").style.position = "static";
      } else {
        document.getElementById("top-bar").style.position = "fixed";
      }
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("top-bar").style.top = "0";
      } else {
        document.getElementById("top-bar").style.top = "-500px";
      }
      prevScrollpos = currentScrollPos;
    };
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
}
