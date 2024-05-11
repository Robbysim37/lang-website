import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material/material.module';
import { HomePageComponent } from './home-page/home-page.component';
import { VideosComponent } from './videos/videos.component';
import { VideoGridCardComponent } from './videos/video-grid-card/video-grid-card.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';
import { PeopleComponent } from './people/people.component';
import { PersonGridCardComponent } from './people/person-grid-card/person-grid-card.component';
import { PhotoModalComponent } from './photos/photo-modal/photo-modal.component';
import { FullPageGridComponent } from './main-content/full-page-grid/full-page-grid.component';
import { VideoDetailsComponent } from './videos/video-details/video-details.component';
import { VideosService } from './services/videos.service';

const appRoutes:Routes = [
  {path: "videos",component:VideosComponent},
  {path: "videos/:id", component:VideoDetailsComponent},
  {path: "photos",component:PhotosComponent},
  {path: "people",component:PeopleComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    VideosComponent,
    VideoGridCardComponent,
    PhotosComponent,
    PeopleComponent,
    PersonGridCardComponent,
    PhotoModalComponent,
    FullPageGridComponent,
    VideoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    provideAnimationsAsync(),
    VideosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
