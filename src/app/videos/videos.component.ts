import { Component, OnInit } from '@angular/core';
import { VideosService,videoObj } from '../services/videos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss',
})

export class VideosComponent implements OnInit {

  private videosSubscription: Subscription = new Subscription();

  constructor(private videosService: VideosService){}

  videoDetailsArr:videoObj[] = []

  ngOnInit(): void {
    this.videosService.getBackendVideos()
    this.videosSubscription = this.videosService.videos$.subscribe(value => {
      this.videoDetailsArr = value;
    });
  }

  ngOnDestroy(): void {
    this.videosSubscription.unsubscribe();
  }
}
