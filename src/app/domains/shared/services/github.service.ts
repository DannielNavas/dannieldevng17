import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { IResponseGithub } from '../models/response-github.interface';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getProjects(): Observable<IResponseGithub[]> {
    return this.http.get<IResponseGithub[]>(
      `${environment.github_url}/DannielNavas/repos?per_page=100`
    );
  }
}
