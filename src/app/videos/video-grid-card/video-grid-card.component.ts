import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { videoObj,videoObjInitializer } from '../../services/videos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-video-grid-card',
  templateUrl: './video-grid-card.component.html',
  styleUrl: './video-grid-card.component.scss'
})
export class VideoGridCardComponent implements OnChanges{

  constructor(private router:Router, private route: ActivatedRoute) {}
  @Input() cardData:videoObj = videoObjInitializer
  imgUrl:string = ``

  ngOnChanges(changes: SimpleChanges): void {
      this.imgUrl = `http://174.174.187.245:8082/api/Videos/thumbnail-src/${this.cardData.thumbnail}`
  }

  onCardClick = () => {
    this.router.navigate([this.cardData.id], {relativeTo:this.route})
  }
}
