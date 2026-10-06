import { Component, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SLIDES } from '../data';
@Component({
  selector: 'app-hero', standalone: true, imports: [RouterLink],
  template: `<section class="hero" aria-roledescription="carousel" aria-label="Highlights">
    @for (s of slides; track s.title; let i = $index) {
      <div class="slide" [class.on]="i === cur()" [style.background]="s.bg" [attr.aria-hidden]="i !== cur()">
        <div class="wrap"><h1>{{ s.title }}</h1><p>{{ s.text }}</p>
          <div class="cta">@for (c of s.cta; track c[0]) { <a class="btn" [routerLink]="c[1]">{{ c[0] }}</a> }</div></div>
      </div>
    }
    <button class="nav-btn l" aria-label="Previous slide" (click)="go(-1)">‹</button><button class="nav-btn r" aria-label="Next slide" (click)="go(1)">›</button>
    <div class="dots">@for (s of slides; track s.title; let i = $index) { <button [class.on]="i === cur()" [attr.aria-label]="'Slide ' + (i+1)" (click)="cur.set(i)"></button> }</div>
  </section>`
})
export class HeroComponent implements OnDestroy {
  slides = SLIDES; cur = signal(0);
  private t = setInterval(() => this.go(1), 6000);
  go(d: number) { this.cur.set((this.cur() + d + this.slides.length) % this.slides.length); }
  ngOnDestroy() { clearInterval(this.t); }
}
