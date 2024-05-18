import { Component, OnInit } from '@angular/core';
import { VideosService } from './services/videos.service';
import { PeopleService } from './services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor(private videosService:VideosService, private peopleService:PeopleService) {}

  title = 'lang-frontend';

  ngOnInit(): void {
    this.videosService.getBackendVideos()
    this.peopleService.getBackendPeople()
  }
}
