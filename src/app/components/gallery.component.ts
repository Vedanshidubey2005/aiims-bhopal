import { Component, HostListener, computed, signal } from '@angular/core';
import { GALLERY, GALLERY_CATS } from '../data';
@Component({
  selector: 'app-gallery', standalone: true,
  template: `<section class="section wrap"><h2>Gallery</h2>
    <div class="tabs">@for (c of cats; track c) { <button [class.on]="cat() === c" (click)="cat.set(c)">{{ c }}</button> }</div>
    <div class="masonry">@for (g of shown(); track g.src; let i = $index) {
      <button class="tile" [class.tall]="g.tall" (click)="open.set(i)" [attr.aria-label]="'Open ' + g.cat + ' image'"><span>{{ g.cat }}</span></button> }</div>
    @if (open() !== null) {
      <div class="lightbox" role="dialog" aria-modal="true"><button class="x" aria-label="Close" (click)="open.set(null)">✕</button>
        <button class="p" aria-label="Previous" (click)="step(-1)">‹</button>
        <div class="big">{{ shown()[open()!].cat }}<small>Placeholder: {{ shown()[open()!].src }}</small></div>
        <button class="n" aria-label="Next" (click)="step(1)">›</button></div>
    }</section>`
})
export class GalleryComponent {
  cats = GALLERY_CATS; cat = signal('All'); open = signal<number | null>(null);
  shown = computed(() => GALLERY.filter(g => this.cat() === 'All' || g.cat === this.cat()));
  step(d: number) { const n = this.shown().length; this.open.set((this.open()! + d + n) % n); }
  @HostListener('document:keydown', ['$event']) key(e: KeyboardEvent) {
    if (this.open() === null) return;
    if (e.key === 'Escape') this.open.set(null);
    if (e.key === 'ArrowRight') this.step(1);
    if (e.key === 'ArrowLeft') this.step(-1);
  }
}
