import { Component } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLinkWithHref, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isOpen = false;

  openMenu(): void {
    this.isOpen = !this.isOpen;
  }
}
