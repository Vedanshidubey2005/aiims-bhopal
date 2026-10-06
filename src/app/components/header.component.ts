import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MENU, TICKER } from '../data';
@Component({
  selector: 'app-header', standalone: true, imports: [RouterLink],
  template: `
  <div class="topbar"><div class="wrap">
    <a href="#main">Skip to Main Content</a><span class="sp"></span>
    <button aria-label="Decrease text">A-</button><button aria-label="Normal text">A</button><button aria-label="Increase text">A+</button>
    <a href="#">Hindi</a><a href="#">Accessibility</a><a href="#">Sitemap</a><a routerLink="/administration">Contact</a>
  </div></div>
  <header class="site-header">
    <div class="wrap brand-row">
      <a routerLink="/" class="brand">
        <img src="assets/icons/aiims-logo.svg" alt="AIIMS Bhopal logo" width="56" height="56">
        <span><strong>All India Institute of Medical Sciences, Bhopal</strong><small>An Institute of National Importance</small></span>
      </a>
      <div class="actions">
        <button class="icon-btn" aria-label="Search" (click)="searchOpen.set(true)">🔍</button>
        <a class="btn danger" routerLink="/hospital">Emergency / Patient Help</a>
        <a class="btn ghost" routerLink="/resources">Quick Access</a>
        <button class="icon-btn burger" aria-label="Toggle menu" [attr.aria-expanded]="mobile()" (click)="mobile.set(!mobile())">☰</button>
      </div>
    </div>
    <nav class="nav" [class.open]="mobile()" aria-label="Main">
      <ul class="wrap">
        @for (g of menu; track g.label) {
          <li (mouseenter)="hover(g.label)" (mouseleave)="hover('')">
            <a [routerLink]="g.link" (click)="click($event, g)" [attr.aria-expanded]="g.items.length ? active() === g.label : null">{{ g.label }}{{ g.items.length ? ' ▾' : '' }}</a>
            @if (g.items.length && active() === g.label) {
              <div class="mega"><div class="mega-intro"><h3>{{ g.label }}</h3><p>{{ g.blurb }}</p><a class="btn" [routerLink]="g.link" (click)="close()">Explore</a></div>
                <div class="mega-grid">
                  @for (i of g.items; track i.label) {
                    <a [routerLink]="i.link" (click)="close()" class="mega-item"><span class="ic" aria-hidden="true">{{ i.icon }}</span><span><b>{{ i.label }}</b><small>{{ i.desc }}</small></span></a>
                  }
                </div></div>
            }
          </li>
        }
      </ul>
    </nav>
    <div class="ticker"><div class="wrap"><b>Latest Updates →</b><div class="track"><span>{{ items }}</span></div></div></div>
  </header>
  @if (searchOpen()) {
    <div class="overlay" role="dialog" aria-label="Search" (click)="searchOpen.set(false)"><div class="search" (click)="$event.stopPropagation()">
      <input type="search" placeholder="Search AIIMS Bhopal..." aria-label="Search AIIMS Bhopal">
      <ul><li><a routerLink="/hospital" (click)="searchOpen.set(false)">OPD timings (sample result)</a></li>
      <li><a routerLink="/academics" (click)="searchOpen.set(false)">Academic calendar (sample result)</a></li>
      <li><a routerLink="/tender" (click)="searchOpen.set(false)">Active tenders (sample result)</a></li></ul>
      <button class="btn" (click)="searchOpen.set(false)">Close</button></div></div>
  }`
})
export class HeaderComponent {
  menu = MENU; items = TICKER.join('   •   ');
  active = signal(''); mobile = signal(false); searchOpen = signal(false);
  hover(l: string) { if (window.innerWidth > 960) this.active.set(l); }
  click(e: Event, g: { label: string; items: unknown[] }) {
    if (!g.items.length) return this.close();
    if (window.innerWidth <= 960 && this.active() !== g.label) { e.preventDefault(); this.active.set(g.label); } else this.close();
  }
  close() { this.active.set(''); this.mobile.set(false); }
  @HostListener('document:keydown.escape') esc() { this.close(); this.searchOpen.set(false); }
}
