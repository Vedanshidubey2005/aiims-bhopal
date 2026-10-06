import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero.component';
import { QuickAccessComponent } from '../components/quick-access.component';
import { OfficialsComponent } from '../components/officials.component';
import { InformationHubComponent } from '../components/information-hub.component';
import { ServicesComponent } from '../components/services.component';
import { ResearchComponent } from '../components/research.component';
import { GalleryComponent } from '../components/gallery.component';
import { FeedbackComponent } from '../components/feedback.component';
@Component({
  selector: 'app-home', standalone: true,
  imports: [HeroComponent, QuickAccessComponent, OfficialsComponent, InformationHubComponent, ServicesComponent, ResearchComponent, GalleryComponent, FeedbackComponent],
  template: `<app-hero /><app-quick-access /><app-officials /><app-information-hub /><app-services /><app-research /><app-gallery /><app-feedback />`
})
export class HomeComponent {}
