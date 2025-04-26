import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  template: `<div class="navbar h-5">
    @if(hasBack()){
    <a class="btn btn-square btn-ghost" routerLink="/">
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
        /></svg></a
    >} @if(title()){
    <div class="flex-auto text-3xl font-semibold text-center">
      {{ title() }}
    </div>
    }
    <div class="w-10"></div>
  </div> `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  title = model<string>('');
  hasBack = model<boolean>(false);
}
