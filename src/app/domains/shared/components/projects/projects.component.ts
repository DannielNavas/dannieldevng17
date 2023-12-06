import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IResponseGithub } from '@domain/shared/models/response-github.interface';
import { GoogleAnalyticsService } from '@domain/shared/services/google-analytics.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  @Input() project!: IResponseGithub;

  constructor(private googleAnalyticsService: GoogleAnalyticsService) {}

  goGeneric(name: string, url: string): void {
    this.googleAnalyticsService.logEvent(
      'click',
      'projects',
      'go to project',
      name
    );
    window.open(url, '_blank');
  }
}
