import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { Router } from '@angular/router';
import { KoloService } from '../shared/data-access/kolo.service';
import { KoloStore } from '../shared/data-access/kolo.store';
import { NavbarComponent } from '../shared/features/navbar.component';
import { BypassSecurityTrustResourceUrlPipe } from '../shared/utils/bypassSecurityTrustResourceUrl.pipe';

@Component({
  selector: 'app-folkor',
  imports: [BypassSecurityTrustResourceUrlPipe, NavbarComponent],
  template: `<div class="flex flex-col p-4 fade-in-element">
    @if(kolo()){
    <article class="prose font-sans">
      <app-navbar [title]="kolo()!.name" [hasBack]="true"></app-navbar>
      <div
        class="mb-6 h-[28px] w-full bg-repeat-x bg-[url('/motifs.png')] bg-[length:auto_28px]"
      ></div>
      @if(kolo()?.fullVideo){
      <div class="w-full h-0 pb-[56%] overflow-hidden relative">
        <iframe
          class="absolute top-0 left-0 w-full h-full rounded-3xl"
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
            class="absolute top-0 left-0 w-full h-full rounded-3xl"
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
