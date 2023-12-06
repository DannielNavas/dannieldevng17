import { Component, inject, signal } from '@angular/core';
import { ProjectsComponent } from '@domain/shared/components/projects/projects.component';
import { IResponseGithub } from '@domain/shared/models/response-github.interface';
import { GithubService } from '@domain/shared/services/github.service';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [ProjectsComponent],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
})
export class ProjectPageComponent {
  projects = signal<IResponseGithub[]>([]);
  private githubService = inject(GithubService);

  ngOnInit(): void {
    this.getProjectsGithub();
  }

  getProjectsGithub(): void {
    this.githubService.getProjects().subscribe({
      next: (response: IResponseGithub[]) => {
        this.projects.set(response);
      },
      error: (error: string | undefined) => {
        throw new Error(error);
      },
    });
  }
}
