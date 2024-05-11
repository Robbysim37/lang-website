import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideosService } from '../../services/videos.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrl: './video-details.component.css'
})
export class VideoDetailsComponent implements OnInit{

  constructor(private route:ActivatedRoute, videosService:VideosService) {}

  videoID:string = ""

  ngOnInit() {
    this.videoID = this.route.snapshot.params['id']
    this.videosService
  }

}
