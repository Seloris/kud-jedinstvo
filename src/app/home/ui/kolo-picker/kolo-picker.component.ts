import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { Kolo } from '../../../shared/interfaces/kolo';

@Component({
  selector: 'app-kolo-picker',
  imports: [],
  template: `<ul class="list bg-base-100 rounded-box shadow-md">
    <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Sva kola</li>

    @for (kolo of kolos(); track kolo.name) {
    <li class="list-row">
      <div class="list-col-grow">
        <div>{{ kolo.name }}</div>
        <div class="text-xs uppercase font-semibold opacity-60">
          {{ kolo.koraci.length }} koraci
        </div>
      </div>
      <a
        [href]="'/kolo/' + kolo.id"
        class="btn btn-square btn-ghost"
        (click)="koloSelect.emit(kolo)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon h-6"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="48"
            d="M268 112l144 144-144 144M392 256H100"
          />
        </svg>
      </a>
    </li>
    }
  </ul>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KoloPickerComponent {
  koloSelect = output<Kolo>();
  kolos = input<Kolo[]>([]);
}
