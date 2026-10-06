import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MENU } from '../data';
import { GalleryComponent } from '../components/gallery.component';
@Component({
  selector: 'app-section-page', standalone: true, imports: [RouterLink, GalleryComponent],
  template: `<section class="banner"><div class="wrap"><nav aria-label="Breadcrumb"><a routerLink="/">Home</a> / {{ title }}</nav><h1>{{ title }}</h1></div></section>
  <div class="wrap page">
    <aside aria-label="Section navigation"><h2>{{ title }}</h2>@for (i of group?.items; track i.label) { <a href="#">{{ i.label }}</a> }</aside>
    <div>@if (title === 'Gallery') { <app-gallery /> } @else {
      @for (i of group?.items; track i.label) { <article class="card"><h3>{{ i.icon }} {{ i.label }}</h3><p>{{ i.desc }}</p></article> }
      @if (!group?.items?.length) { <article class="card"><p>Official information will be updated here.</p></article> } }</div></div>`
})
export class SectionPageComponent {
  title = inject(ActivatedRoute).snapshot.data['title'] as string;
  group = MENU.find(g => g.label === this.title);
}
