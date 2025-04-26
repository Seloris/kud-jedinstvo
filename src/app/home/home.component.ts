import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { KoloStore } from '../shared/data-access/kolo.store';
import { NavbarComponent } from '../shared/features/navbar.component';
import { KoloPickerComponent } from './ui/kolo-picker/kolo-picker.component';

@Component({
  selector: 'app-folkor',
  imports: [NavbarComponent, KoloPickerComponent],
  template: `<div class="flex flex-col h-screen fade-in-element">
    <app-navbar></app-navbar>
    <div class="px-4 pb-12 flex flex-col">
      <img
        class="h-32 w-32 self-center"
        src="logo-kud.png"
        alt="KUD Jedinstvo"
      />
      <app-kolo-picker [kolos]="koloStore.kola()"></app-kolo-picker>
    </div>
  </div>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  koloStore = inject(KoloStore);
  router = inject(Router);
}
