import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-footer', standalone: true, imports: [RouterLink],
  template: `<footer class="footer"><div class="wrap cols">
    <div><img src="assets/icons/aiims-logo.svg" alt="AIIMS Bhopal logo" width="64" height="64"><h3>AIIMS Bhopal</h3><p>All India Institute of Medical Sciences, Bhopal</p><p>Saket Nagar, Bhopal, Madhya Pradesh – 462020</p></div>
    <div><h3>Important Links</h3><a routerLink="/about-us">About Us</a><a routerLink="/hospital">Hospital</a><a routerLink="/academics">Academics</a><a routerLink="/research">Research</a><a routerLink="/gallery">Gallery</a></div>
    <div><h3>Resources</h3><a routerLink="/resources">Downloads</a><a routerLink="/resources">Notices</a><a routerLink="/tender">Tender</a><a routerLink="/resources">Recruitment</a><a routerLink="/administration">Contact</a></div>
    <div><h3>Contact</h3><p>Phone: to be updated</p><p>Email: to be updated</p><p>Saket Nagar, Bhopal – 462020</p>
      <p class="soc"><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="X">𝕏</a><a href="#" aria-label="YouTube">▶</a><a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="LinkedIn">in</a></p></div></div>
    <div class="legal"><div class="wrap"><span>© All India Institute of Medical Sciences, Bhopal. All Rights Reserved.</span><span><a href="#">Privacy Policy</a><a href="#">Disclaimer</a><a href="#">Website Policy</a><a href="#">Accessibility</a></span></div></div></footer>`
})
export class FooterComponent {}
