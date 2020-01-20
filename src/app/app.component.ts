import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    window.onscroll = function () {
      updateTopBar();
    };
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
      document.getElementById("top-bar").style.top = "0";
    });
  }
}

let prevScrollPos = window.pageYOffset;

function updateTopBar() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("top-bar").style.top = "0";
  } else {
    document.getElementById("top-bar").style.top = "-10vh";
  }
  prevScrollPos = currentScrollPos;
}
