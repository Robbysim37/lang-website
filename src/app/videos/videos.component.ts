import { Component, OnInit } from '@angular/core';
import { VideosService,videoObj } from '../services/videos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss',
})

export class VideosComponent implements OnInit {
  
  constructor(private videosService: VideosService){}

  private videosSubscription: Subscription = new Subscription();
  videoDetailsArr:videoObj[] = []

  ngOnInit(): void {
    this.videosSubscription = this.videosService.videos$.subscribe(value => {
      this.videoDetailsArr = value;
    });
  }

  ngOnDestroy(): void {
    this.videosSubscription.unsubscribe();
  }
}
