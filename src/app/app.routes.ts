import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./domains/home/pages/landing/landing.component').then(
        (m) => m.LandingComponent
      ),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import(
        './domains/projects/pages/project-page/project-page.component'
      ).then((m) => m.ProjectPageComponent),
  },
];
