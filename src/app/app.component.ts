import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './domains/shared/components/footer/footer.component';
import { NavbarComponent } from './domains/shared/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  template: `<div class="container">
    <app-navbar />
    <router-outlet />
    <app-footer />
  </div>`,
  styles: `.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}`,
})
export class AppComponent {}
