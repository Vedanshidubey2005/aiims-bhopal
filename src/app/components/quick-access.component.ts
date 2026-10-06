import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { QUICK } from '../data';
@Component({
  selector: 'app-quick-access', standalone: true, imports: [RouterLink],
  template: `<section class="dock wrap" aria-label="Quick access">
    @for (q of items; track q.label) { <a [routerLink]="q.link" [class.urgent]="q.urgent"><span aria-hidden="true">{{ q.icon }}</span>{{ q.label }}</a> }</section>`
})
export class QuickAccessComponent { items = QUICK; }
