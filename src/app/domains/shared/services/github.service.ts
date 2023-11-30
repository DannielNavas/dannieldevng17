import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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
