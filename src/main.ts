import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { initializeApp } from 'firebase/app'
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//initializeApp(environment.firebaseConfig);

initializeApp(environment.firebaseConfig);


if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
});
