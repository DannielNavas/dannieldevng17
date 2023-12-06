import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { IResponseStatistics } from '../../models/statistics.interface';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  constructor(private http: HttpClient) {}

  getStats(): Observable<IResponseStatistics[]> {
    return this.http.get<IResponseStatistics[]>(environment.statistics);
  }
}
