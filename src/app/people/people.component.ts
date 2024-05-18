import { Component } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { Subscription } from 'rxjs';
import { personObj } from '../services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
})
export class PeopleComponent {

constructor(private peopleService:PeopleService){}

private peopleSubscription: Subscription = new Subscription();
peopleArr:personObj[] = []

ngOnInit(): void {
  this.peopleSubscription = this.peopleService.people$.subscribe(value => {
    this.peopleArr = value;
  });
}

ngOnDestroy(): void {
  this.peopleSubscription.unsubscribe();
}
}
