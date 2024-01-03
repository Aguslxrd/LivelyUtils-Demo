// backendapi.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IVideos } from '../Interfaces/IVideos';

@Injectable({
  providedIn: 'root'
})
export class BackendapiService {

  private apiUrl = 'http://dev-club.duckdns.org:8080/api/v1/video';

  constructor(private http: HttpClient) {}

  getData(): Observable<IVideos[]> {
    return this.http.get<IVideos[]>(this.apiUrl);
  }

  getYouTubeThumbnail(videoUrl: string): Observable<string> {
    const videoId = videoUrl.split('v=')[1];
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    return new Observable(observer => {
      const img = new Image();
      img.src = thumbnailUrl;
      
      img.onload = () => {
        observer.next(thumbnailUrl);
        observer.complete();
      };

      img.onerror = (error) => {
        observer.error(error);
        observer.complete();
      };
    });
  }
}
