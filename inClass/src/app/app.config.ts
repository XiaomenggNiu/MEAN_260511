import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './counter-component/state/reducers';
import { userReducer } from './counter-component/state/user-reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Register the routes for application
    provideRouter(routes),
    provideHttpClient(),
    provideStore({counter: counterReducer, user: userReducer})
]
};
