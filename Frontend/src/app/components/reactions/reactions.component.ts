import { Component, OnInit } from '@angular/core';
import { BackendapiService } from '../../services/backendapi.service';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrl: './reactions.component.css'
})
export class ReactionsComponent implements OnInit {
  data: any[] = [];

  constructor(private dataService: BackendapiService) {}

  ngOnInit() {
    this.loadData();
    
    
  }

  loadData() {
    this.dataService.getData().subscribe(
      (result) => {
        this.data = result;
        // Obtener miniatura para cada video
        this.data.forEach(video => {
          this.dataService.getYouTubeThumbnail(video.urlVideo).subscribe(
            (thumbnailUrl) => {
              video.thumbnailUrl = thumbnailUrl;
            },
            (error) => {
              console.error('Error al obtener miniatura:', error);
            }
          );
        });
      },
      (error) => {
        console.error('Error al cargar datos:', error);
      }
    );
    
  }
}
