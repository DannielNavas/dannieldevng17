import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./domains/home/pages/landing/landing.component').then(
        (m) => m.LandingComponent
      ),
  },
];
