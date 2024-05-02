import { Component, Input } from '@angular/core';

interface videoDetails {
  description: string
  file_name: string
  id: number
  location: string
  thumbnail: string
  title: string
  year: number
}

let videoDetailsInitializer = {
  description: "",
  file_name: "",
  id: 0,
  location: "",
  thumbnail: "",
  title: "",
  year: 0
}

@Component({
  selector: 'app-video-grid-card',
  templateUrl: './video-grid-card.component.html',
  styleUrl: './video-grid-card.component.scss'
})
export class VideoGridCardComponent {

  constructor() {}
  @Input() cardData:videoDetails = videoDetailsInitializer
}
