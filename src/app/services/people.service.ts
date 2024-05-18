import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { BehaviorSubject, Observable } from 'rxjs';

export const personObjInitializer = {
    date_of_birth: "",
    date_of_passing: null,
    first_name: "",
    id: "",
    last_name: "",
    nick_name: "",
    picture: "",
    suffix: null
  }

export interface personObj{
    date_of_birth: string
    date_of_passing: string | null
    first_name: string
    id: string
    last_name: string
    nick_name: string
    picture: string
    suffix: string | null
}

@Injectable({
    providedIn: 'root'
  })

  export class PeopleService{

    constructor(private http:HttpClient){}

    private _people:personObj[] = [];
    private peopleSubject: BehaviorSubject<personObj[]> = new BehaviorSubject<personObj[]>(this._people);

    get people$(): Observable<personObj[]> {
        return this.peopleSubject.asObservable();
    }

    updatePeople(newValue: personObj[]): void {
        this._people = newValue;
        this.peopleSubject.next(newValue);
      }

    getBackendPeople = () => {
        this.http.get<personObj[]>("http://174.174.187.245:8082/api/People")
        .pipe(map(responseData => {
            const peopleArr:personObj[] = []
            responseData.forEach(detailObj => {
            peopleArr.push(detailObj)
            })
            return peopleArr
        }))
        .subscribe(peopleArr => {
            console.log(peopleArr)
            this.updatePeople(peopleArr)
        })
    }

  }