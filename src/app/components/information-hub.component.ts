import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { EVENTS, NOTICES, POSTS } from '../data';
@Component({
  selector: 'app-information-hub', standalone: true, imports: [DatePipe],
  template: `<section class="section grey"><div class="wrap hub">
    <div class="panel"><h2>What's New</h2><ul class="notices">
      @for (n of notices; track n.title) { <li><a href="#"><span class="new">NEW</span><time>{{ n.date | date:'dd MMM yyyy' }}</time><span class="t">{{ n.title }}</span><span aria-hidden="true">›</span></a></li> }
      </ul><a class="more" href="#">View All Notices →</a></div>
    <div class="panel"><h2>Calendar</h2><p class="month">{{ monthName }}</p>
      <div class="cal">@for (d of dayNames; track $index) { <b>{{ d }}</b> } @for (b of blanks; track $index) { <i></i> }
        @for (d of days; track d) { <span [class.today]="d === today" [class.event]="isEvent(d)">{{ d }}</span> }</div>
      <ul class="legend"><li>Academic Events</li><li>Holidays</li><li>Important Events</li></ul><a class="btn" href="#">View Calendar</a></div>
    <div class="panel souvenir"><h2>Souvenir</h2><div class="book"><span>AIIMS Bhopal<br>Souvenir</span></div>
      <p>Explore milestones, achievements, events and memories of AIIMS Bhopal.</p><a class="btn" href="#">View Souvenir</a></div>
    <div class="panel social"><h2>Facebook</h2><div class="posts">
      @for (p of posts; track p.date) { <article><div class="img"></div><b>{{ p.page }}</b><small>{{ p.date }}</small><p>{{ p.text }}</p><a class="btn" href="#">View on Facebook</a></article> }</div></div>
  </div></section>`
})
export class InformationHubComponent {
  notices = NOTICES; posts = POSTS; dayNames = ['S','M','T','W','T','F','S'];
  private now = new Date(); today = this.now.getDate();
  monthName = this.now.toLocaleString('en-IN', { month: 'long', year: 'numeric' });
  blanks = Array(new Date(this.now.getFullYear(), this.now.getMonth(), 1).getDay());
  days = Array.from({ length: new Date(this.now.getFullYear(), this.now.getMonth() + 1, 0).getDate() }, (_, i) => i + 1);
  isEvent(d: number) { return EVENTS.some(e => e.day === d); }
}
