import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPost } from '../../models/post.interface';

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
}
