import { DatePipe, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { Component, Input, LOCALE_ID, inject } from '@angular/core';
import { Article } from '@domain/shared/models/article.interface';
import { DevtoPostService } from '@domain/shared/services/devto-post/devto-post.service';
import { MarkdownModule } from 'ngx-markdown';

registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [MarkdownModule, DatePipe],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-CO',
    },
  ],
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
