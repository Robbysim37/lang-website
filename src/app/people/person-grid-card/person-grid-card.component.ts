import { Component,Input, OnChanges,SimpleChanges } from '@angular/core';
import { personObj,personObjInitializer } from '../../services/people.service';


@Component({
  selector: 'app-person-grid-card',
  templateUrl: './person-grid-card.component.html',
  styleUrl: './person-grid-card.component.scss'
})
export class PersonGridCardComponent implements OnChanges{

  @Input()cardData:personObj = personObjInitializer
  imgUrl:string = ``

  ngOnChanges(changes: SimpleChanges): void {
    this.imgUrl = this.cardData.picture
  }
}
