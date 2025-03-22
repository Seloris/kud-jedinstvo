import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KoloService } from './shared/data-access/kolo.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<div class="h-full w-full"><router-outlet></router-outlet></div>',
})
export class AppComponent implements OnInit {
  title = 'kud-jedinstvo';
  koloService = inject(KoloService);
  ngOnInit(): void {
    this.koloService.getKola();
  }
}
