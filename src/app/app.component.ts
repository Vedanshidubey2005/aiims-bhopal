import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { FloatersComponent } from './components/floaters.component';
@Component({
  selector: 'app-root', standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FloatersComponent],
  template: `<app-header /><main id="main"><router-outlet /></main><app-footer /><app-floaters />`
})
export class AppComponent {}
