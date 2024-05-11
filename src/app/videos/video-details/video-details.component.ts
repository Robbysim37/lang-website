import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideosService, videoObj, videoObjInitializer } from '../../services/videos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrl: './video-details.component.css'
})
export class VideoDetailsComponent implements OnInit{

  constructor(private route:ActivatedRoute, private videosService:VideosService) {}

  private videosLoadedSubscription: Subscription = new Subscription();

  dataFound:boolean = false
  videoID:string = ""
  videoObj:videoObj = videoObjInitializer
  videoUrl:string = ""

  ngOnInit() {

    this.videosLoadedSubscription = this.videosService.videosLoaded$.subscribe(value => {
      if(value == true){
          this.videoID = this.route.snapshot.params['id']
          console.log("Id is set:" + this.videoID)
          this.videoObj = this.videosService.getSingleVideo(this.videoID)
          console.log("video obj retrieved" + this.videoObj)
          this.videoUrl = `http://174.174.187.245:8082/api/Videos/video-src/${this.videoObj.file_name}`
          console.log("URL updated" +  this.videoUrl)
          this.dataFound = true
      }
    });
  }
}
