import { inject, Injectable } from '@angular/core';
import { Kolo } from '../interfaces/kolo';
import { KoloStore } from './kolo.store';

@Injectable({ providedIn: 'root' })
export class KoloService {
  koloStore = inject(KoloStore);

  getKola() {
    this.koloStore.setKola(ALL_KOLA);
  }
}

const ALL_KOLA: Kolo[] = [
  {
    id: 'sumadija',
    fullVideo: { videoUrl: 'https://youtube.com/embed/s8OxpFMpYlE' },
    koraci: [
      { name: 'Korak 1', video: undefined },
      {
        name: 'Korak 2',
        video: {
          videoUrl:
            'https://youtube.com/embed/QVG8gXT99CU?loop=1&playlist=QVG8gXT99CU',
        },
      },
      {
        name: 'Korak 3',
      },
      {
        name: 'Korak 4',
      },
      {
        name: 'Korak 5',
      },
      {
        name: 'Korak 6 (Čačak 1)',
        video: {
          videoUrl:
            'https://youtube.com/embed/rFM1txndCZY?loop=1&playlist=rFM1txndCZY',
        },
      },
      {
        name: 'Korak 7',
      },
    ],
    name: 'Šumadija',
  },
  {
    id: 'pirot',
    fullVideo: { videoUrl: 'https://youtube.com/embed/C0BQ1t7y63A' },
    koraci: [
      {
        name: 'Korak 1',
      },
      {
        name: 'Korak 2',
      },
      {
        name: 'Korak 3',
      },
      {
        name: 'Korak 4',
      },
      {
        name: 'Korak 5',
      },
    ],
    name: 'Pirot',
  },
  {
    id: 'bunjevka',
    fullVideo: { videoUrl: 'https://youtube.com/embed/bg4tJdPk-6o' },
    koraci: [
      { name: 'Korak 1', video: undefined },
      {
        name: 'Korak 2',
        video: {
          videoUrl:
            'https://youtube.com/embed/_RsCcOYzKGQ?loop=1&playlist=_RsCcOYzKGQ',
        },
      },
      { name: 'Korak 3', video: undefined },
      { name: 'Korak 4', video: undefined },
      { name: 'Korak 5', video: undefined },
      { name: 'Korak 6', video: undefined },
    ],
    name: 'Bunjevka',
  },
  {
    id: 'cacak',
    name: 'Svako Čačak kolo',
    koraci: [
      {
        name: 'Čačak 1',
        video: {
          videoUrl:
            'https://youtube.com/embed/rFM1txndCZY?loop=1&playlist=rFM1txndCZY',
        },
      },
      {
        name: 'Čačak 2',
        video: {
          videoUrl:
            'https://youtube.com/embed/43C7Kqb4dPc?loop=1&playlist=43C7Kqb4dPc',
        },
      },
    ],
  },
];
