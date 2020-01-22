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

let boxShadow = "0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12)";
let prevScrollPos = window.pageYOffset;

function updateTopBar() {
  updateLogo();
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("top-bar").style.top = "0";
    document.getElementById("top-bar").style.boxShadow = boxShadow;
  } else {
    document.getElementById("top-bar").style.top = "-10vh";
    document.getElementById("top-bar").style.boxShadow = "none";
  }
  prevScrollPos = currentScrollPos;
}

function updateLogo() {
  if (this.isInit()) {
    document.getElementById("logo").style.display = "unset";
    document.getElementById("back").style.display = "none";
  } else {
    document.getElementById("logo").style.display = "none";
    document.getElementById("back").style.display = "unset";
  }
}

function isInit() {
  let url = this.normalizeUrl(this.router.url);
  return url == "";
}

function normalizeUrl(url: string) {
  return url.replace('/', '');
}
