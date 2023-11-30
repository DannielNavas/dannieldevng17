import { Component, inject, signal } from '@angular/core';
import { IPost } from '../../../shared/models/post.interface';
import { IResponseGithub } from '../../../shared/models/response-github.interface';
import { IResponseYoutube } from '../../../shared/models/response-youtube';
import { IResponseStatistics } from '../../../shared/models/statistics.interface';
import { DevtoPostService } from '../../../shared/services/devto-post/devto-post.service';
import { GithubService } from '../../../shared/services/github.service';
import { StatisticsService } from '../../../shared/services/statistics/statistics.service';
import { YoutubeService } from '../../../shared/services/youtube/youtube.service';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  projects = signal<IResponseGithub[]>([]);
  articles = signal<IPost[]>([]);
  stasts = signal<IResponseStatistics[]>([]);
  videos = signal<IResponseYoutube | null>(null);
  private githubService = inject(GithubService);
  private devtoPostService = inject(DevtoPostService);
  private statisticsService = inject(StatisticsService);
  private youtubeService = inject(YoutubeService);

  ngOnInit(): void {
    this.getProjectsGithub();
    this.getLastArticles();
    this.getStats();
    this.getVideo();
  }

  getProjectsGithub(): void {
    this.githubService.getProjects().subscribe({
      next: (response) => {
        this.projects.set(response);
      },
      error: (error) => {
        throw new Error(error);
      },
    });
  }

  getLastArticles(): void {
    this.devtoPostService.latestArticles().subscribe({
      next: (response) => {
        this.articles.set(response);
      },
      error: (error) => {
        throw new Error(error);
      },
    });
  }

  getStats(): void {
    this.statisticsService.getStats().subscribe({
      next: (response) => {
        this.stasts.set(response);
      },
      error: (error) => {
        throw new Error(error);
      },
    });
  }

  getVideo(): void {
    this.youtubeService.getLastesYoutubeVideos().subscribe({
      next: (response) => {
        this.videos.set(response);
      },
      error: (error) => {
        throw new Error(error);
      },
    });
  }
}
