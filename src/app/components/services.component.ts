import { Component } from '@angular/core';
import { SERVICES } from '../data';
@Component({
  selector: 'app-services', standalone: true,
  template: `<section class="section wrap"><h2>OUR SERVICES</h2><div class="grid4">
    @for (s of services; track s.title) { <article class="svc"><span class="ic" aria-hidden="true">{{ s.icon }}</span><h3>{{ s.title }}</h3><p>{{ s.desc }}</p><a href="#">Explore →</a></article> }</div></section>`
})
export class ServicesComponent { services = SERVICES; }
