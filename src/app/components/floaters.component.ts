import { Component, HostListener, signal } from '@angular/core';
@Component({
  selector: 'app-floaters', standalone: true,
  template: `<div class="progress" [style.width.%]="pct()"></div>
  <div class="a11y"><button aria-label="Accessibility options" (click)="a11y.set(!a11y())">♿</button>
    @if (a11y()) { <div class="a11y-menu"><button (click)="size(1)">Increase text</button><button (click)="size(-1)">Decrease text</button><button (click)="contrast()">High contrast</button><button (click)="reset()">Reset</button></div> }</div>
  <button class="emerg" (click)="em.set(!em())">Emergency</button>
  @if (em()) { <div class="emerg-box" role="dialog" aria-label="Emergency contact"><b>Emergency Helpline</b><p>Number: to be updated with official contact.</p><button class="btn" (click)="em.set(false)">Close</button></div> }
  @if (top()) { <button class="totop" aria-label="Back to top" (click)="up()">↑</button> }`
})
export class FloatersComponent {
  pct = signal(0); top = signal(false); a11y = signal(false); em = signal(false); private fs = 100;
  @HostListener('window:scroll') onScroll() {
    const h = document.documentElement; this.pct.set(h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight) * 100); this.top.set(h.scrollTop > 400);
  }
  up() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
  size(d: number) { this.fs = Math.min(140, Math.max(80, this.fs + d * 10)); document.documentElement.style.fontSize = this.fs + '%'; }
  contrast() { document.body.classList.toggle('hc'); }
  reset() { this.fs = 100; document.documentElement.style.fontSize = ''; document.body.classList.remove('hc'); }
}
