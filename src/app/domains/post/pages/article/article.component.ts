import { Component, Input, inject } from '@angular/core';
import { Article } from '@domain/shared/models/article.interface';
import { DevtoPostService } from '@domain/shared/services/devto-post/devto-post.service';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [MarkdownModule],
  providers: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  @Input() id?: string;
  private devtoPostService = inject(DevtoPostService);
  response!: Article;

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle(): void {
    this.devtoPostService.article(this.id ?? '').subscribe({
      next: (response) => {
        console.log(response);
        this.response = response;
      },
      error: (error) => {
        throw new Error(error);
      },
    });
  }

  onCopyToClipboard() {
    alert('copiado');
  }
}
