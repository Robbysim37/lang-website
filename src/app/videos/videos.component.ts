import { Component, OnInit } from '@angular/core';
import { VideosService,videoObj } from '../services/videos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss',
  providers: [VideosService]
})

export class VideosComponent implements OnInit {

  private videosSubscription: Subscription =new Subscription();

  constructor(private videosService: VideosService){}

  videoDetailsArr:videoObj[] = []

  ngOnInit(): void {
    console.log(this.videoDetailsArr)
    this.videosService.getBackendVideos()
    this.videosSubscription = this.videosService.videos$.subscribe(value => {
      this.videoDetailsArr = value;
      console.log(this.videoDetailsArr)
    });
  }

  ngOnDestroy(): void {
    this.videosSubscription.unsubscribe();
  }
}
