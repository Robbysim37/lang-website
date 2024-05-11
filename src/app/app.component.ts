import { Component, OnInit } from '@angular/core';
import { VideosService } from './services/videos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor(private videosService:VideosService) {}

  title = 'lang-frontend';

  ngOnInit(): void {
    this.videosService.getBackendVideos()
  }
}
