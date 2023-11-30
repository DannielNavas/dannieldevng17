import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './domains/shared/components/footer/footer.component';
import { NavbarComponent } from './domains/shared/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  template: '<app-navbar /> <router-outlet /> <app-footer />',
})
export class AppComponent {}
