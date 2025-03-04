import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideAnalytics, getAnalytics } from '@angular/fire/analytics';
import { routes } from './app.routes';
import { environment } from '../environment';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    provideFirestore(()=>getFirestore()),
    provideAnimationsAsync('noop'), provideAnimationsAsync(),
  ],
};
