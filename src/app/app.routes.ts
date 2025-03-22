import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'kolo/:id',
    loadComponent: () =>
      import('./home/kolo.component').then((m) => m.KoloComponent),
  },
];
