import { Component } from '@angular/core';
import { OFFICIALS } from '../data';

@Component({
  selector: 'app-officials',
  standalone: true,
  template: `
    <section class="section wrap">
      <h2>Leadership</h2>

      <div class="cards5">
        @for (o of officials; track $index) {
          <article class="profile">

            <div class="photo">
              <img [src]="o.image" [alt]="o.name">
            </div>

            <h3>{{ o.name }}</h3>
            <p class="role">{{ o.designation }}</p>
            <p>{{ o.description }}</p>
            <a href="#">View Profile</a>

          </article>
        }
      </div>
    </section>
  `
})
export class OfficialsComponent {
  officials = OFFICIALS;
}