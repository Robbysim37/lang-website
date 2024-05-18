import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export const videoObjInitializer = {
    description: "",
    file_name: "",
    id: "",
    location: "",
    thumbnail: "",
    title: "",
    year: 0
  }

export interface videoObj {
    description: string
    file_name: string
    id: string
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
    private _videosLoaded: boolean = false
    private videosSubject: BehaviorSubject<videoObj[]> = new BehaviorSubject<videoObj[]>(this._videos);
    private videosLoadedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this._videosLoaded);

    get videos$(): Observable<videoObj[]> {
        return this.videosSubject.asObservable();
    }

    get videosLoaded$(): Observable<boolean> {
        return this.videosLoadedSubject.asObservable()
    }

    updateVideos(newValue: videoObj[]): void {
        this._videos = newValue;
        this.videosSubject.next(newValue);
      }

    updateVideosLoaded(newValue:boolean): void {
        this._videosLoaded = newValue
        this.videosLoadedSubject.next(newValue)
    }

    getSingleVideo(incomingID:string){
        return this._videos.filter(currVideo => {
            return currVideo.id == incomingID ? true : false
        })[0]
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
            this.updateVideosLoaded(true)
        })
    }
}