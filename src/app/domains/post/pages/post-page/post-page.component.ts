import { Component, inject, signal } from '@angular/core';
import { PostsComponent } from '@domain/shared/components/posts/posts.component';
import { IPost } from '@domain/shared/models/post.interface';
import { DevtoPostService } from '@domain/shared/services/devto-post/devto-post.service';

@Component({
  selector: 'app-post-page',
  standalone: true,
  imports: [PostsComponent],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.scss',
})
export class PostPageComponent {
  articles = signal<IPost[]>([]);
  private devtoPostService = inject(DevtoPostService);

  ngOnInit(): void {
    this.getAllArticles();
  }

  getAllArticles(): void {
    this.devtoPostService.allArticles().subscribe({
      next: (response) => {
        this.articles.set(response);
      },
      error: (error) => {
        throw new Error(error);
      },
    });
  }
}
