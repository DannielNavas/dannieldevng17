import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '@domain/shared/models/article.interface';
import { IPost } from '@domain/shared/models/post.interface';
import { environment } from '@env/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DevtoPostService {
  constructor(private http: HttpClient) {}

  latestArticles(): Observable<IPost[]> {
    return this.http
      .get<IPost[]>(environment.devto)
      .pipe(map((response: IPost[]) => response.slice(0, 3)));
  }

  allArticles(): Observable<IPost[]> {
    return this.http.get<IPost[]>(environment.devto);
  }

  article(id: string): Observable<Article> {
    return this.http.get<Article>(`https://dev.to/api/articles/${id}`);
  }
}
