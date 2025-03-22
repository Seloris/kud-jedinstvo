import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { KoloService } from '../shared/data-access/kolo.service';
import { KoloStore } from '../shared/data-access/kolo.store';
import { BypassSecurityTrustResourceUrlPipe } from '../shared/utils/bypassSecurityTrustResourceUrl.pipe';

@Component({
  selector: 'app-folkor',
  imports: [BypassSecurityTrustResourceUrlPipe, RouterLink],
  template: `<div class="flex flex-col p-4">
    @if(kolo()){
    <article class="prose">
      <div class="flex flex-row">
        <a class="btn btn-square btn-ghost w-10" routerLink="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="48"
              d="M244 400L100 256l144-144M120 256h292"
            />
          </svg>
        </a>
        <h1 class="text-center flex-1">
          {{ kolo()?.name }}
        </h1>
        <div class="w-10"></div>
      </div>
      @if(kolo()?.fullVideo){
      <h2>Celo kolo</h2>
      <div class="w-full h-0 pb-[56%] overflow-hidden relative">
        <iframe
          class="absolute top-0 left-0 w-full h-full"
          frameborder="0"
          allowfullscreen
          allow="autoplay; encrypted-media"
          [src]="
            kolo()?.fullVideo?.videoUrl | appBypassSecurityTrustResourceUrl
          "
        >
        </iframe>
      </div>
      }
      <!-- <button class="btn btn-primary bg-red-700">Videti celo kolo</button> -->
      <h2>Koraci</h2>
      @for(koraci of kolo()?.koraci; track koraci.name){
      <div>
        <h3>{{ koraci.name }}</h3>
        @if(koraci.video){

        <div class="w-full h-0 pb-[56%] overflow-hidden relative">
          <iframe
            class="absolute top-0 left-0 w-full h-full"
            frameborder="0"
            allowfullscreen
            allow="autoplay; encrypted-media"
            [src]="koraci.video.videoUrl | appBypassSecurityTrustResourceUrl"
          >
          </iframe>
        </div>
        } @else {
        <div>⚠️ ZADACI ⚠️</div>
        }
      </div>
      }
    </article>
    }
  </div>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KoloComponent {
  koloService = inject(KoloService);
  koloStore = inject(KoloStore);
  router = inject(Router);

  kolo = this.koloStore.currentKolo;

  @Input()
  set id(koloId: string) {
    this.koloStore.setCurrentKoloId(koloId);
  }
}
