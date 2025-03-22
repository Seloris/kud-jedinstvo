import { inject, Pipe, type PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'appBypassSecurityTrustResourceUrl',
})
export class BypassSecurityTrustResourceUrlPipe implements PipeTransform {
  sanitizer = inject(DomSanitizer);
  transform(url?: string): unknown {
    if (!url) return url;

    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
