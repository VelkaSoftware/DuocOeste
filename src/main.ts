import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
  let head = document.getElementsByTagName("head")[0];
  // el siguiente script es el de cordova, utilizado únicamente en producción
  let cordovaScript = document.createElement("script");
  cordovaScript.type = 'text/javascript';
  cordovaScript.src = 'cordova.js';
  head.appendChild(cordovaScript);
  let onDeviceReady = () => {
    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => alert(err));
  };
  document.addEventListener('deviceready', onDeviceReady, false);
} else {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => alert(err));
}
