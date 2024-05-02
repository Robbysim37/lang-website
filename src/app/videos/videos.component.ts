import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

interface videoDetails {
  description: string
  file_name: string
  id: number
  location: string
  thumbnail: string
  title: string
  year: number
}

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})

export class VideosComponent implements OnInit {

  constructor(private http:HttpClient){}

  videoDetailsArr:videoDetails[] = []

  private getVideos = () => {
    this.http.get<videoDetails[]>("http://174.174.187.245:8082/api/Videos")
    .pipe(map(responseData => {
      const videoArr:videoDetails[] = []
      console.log(responseData)
      responseData.forEach(detailObj => {
        videoArr.push(detailObj)
      })
      return videoArr
    }))
    .subscribe(videoArr => {
      this.videoDetailsArr = videoArr
    })
  }

  ngOnInit(): void {
      this.getVideos()
  }
}
