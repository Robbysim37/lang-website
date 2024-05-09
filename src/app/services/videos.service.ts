import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface videoObj {
    description: string
    file_name: string
    id: number
    location: string
    thumbnail: string
    title: string
    year: number
}

@Injectable({
    providedIn: 'root'
  })

export class VideosService{

    constructor(private http:HttpClient){}

    private _videos:videoObj[] = [];
    private videosSubject: BehaviorSubject<videoObj[]> = new BehaviorSubject<videoObj[]>(this._videos);

    get videos$(): Observable<videoObj[]> {
        return this.videosSubject.asObservable();
    }

    updateVideos(newValue: videoObj[]): void {
        this._videos = newValue;
        this.videosSubject.next(newValue);
      }

    getBackendVideos = () => {
        this.http.get<videoObj[]>("http://174.174.187.245:8082/api/Videos")
        .pipe(map(responseData => {
            const videoArr:videoObj[] = []
            responseData.forEach(detailObj => {
            videoArr.push(detailObj)
            })
            return videoArr
        }))
        .subscribe(videoArr => {
            this.updateVideos(videoArr)
        })
    }
}