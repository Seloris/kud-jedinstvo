import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Kolo } from '../interfaces/kolo';

interface KoloState {
  kola: Kolo[];
  currentKoloId: string | null;
}

const initialState: KoloState = {
  kola: [],
  currentKoloId: null,
};

export const KoloStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store) => ({
    currentKolo: computed(() =>
      store.currentKoloId()
        ? store.kola().find((k) => k.id === store.currentKoloId())
        : null
    ),
  })),
  withMethods((store) => ({
    setCurrentKoloId(id: string) {
      patchState(store, {
        currentKoloId: id,
      });
    },
    setKola(kola: Kolo[]) {
      patchState(store, {
        kola: kola,
      });
    },
  }))
);
