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
  template: `
    <div class="flex w-full flex-col mt-8 font-sans">
      @for (kolo of kolos(); track kolo.name) {
      <a
        [href]="'/kolo/' + kolo.id"
        class="card bg-base-300 rounded-box grid overflow-hidden mt-4 shadow"
      >
        <div
          class="mt-4 h-[28px] w-full bg-repeat-x bg-[url('/motifs.png')] bg-[length:auto_28px]"
        ></div>

        <div class="m-4">
          <div class="text-3xl font-semibold my-2">{{ kolo.name }}</div>
          <div class="text-xl font-semibold opacity-60">
            {{ kolo.koraci.length }} koraci
          </div>
        </div>
      </a>

      }
    </div>
  `,
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
