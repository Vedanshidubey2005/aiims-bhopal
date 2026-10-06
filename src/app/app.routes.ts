import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { SectionPageComponent } from './pages/section-page.component';
const p = (title: string, key: string) => ({ component: SectionPageComponent, data: { title, key } });
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', ...p('About Us', 'about') },
  { path: 'administration', ...p('Administration', 'admin') },
  { path: 'academics', ...p('Academics', 'academics') },
  { path: 'hospital', ...p('Hospital', 'hospital') },
  { path: 'research', ...p('Research', 'research') },
  { path: 'gallery', ...p('Gallery', 'gallery') },
  { path: 'resources', ...p('Resources', 'resources') },
  { path: 'tender', ...p('Tender', 'tender') },
  { path: '**', redirectTo: '' }
];
