import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IResponseYoutube } from '../../models/response-youtube';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(private http: HttpClient) {}

  getLastesYoutubeVideos(): Observable<IResponseYoutube> {
    return this.http.get<IResponseYoutube>(
      `${environment.youtube_endpoint}?part=${environment.youtube_part}&channelId=${environment.youtube_channel}&maxResults=5&order=date&key=${environment.youtube_key}`
    );
  }
}
