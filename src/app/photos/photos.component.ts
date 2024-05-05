import { Component } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.scss'
})
export class PhotosComponent {

constructor(){

}

selectedPhotoURL = "";
isOpen = false;

  displayPhoto(e:MouseEvent) {
    this.isOpen = true;
    const targetElement = e.target as HTMLImageElement;
    const imgSrc = targetElement.src;
    this.selectedPhotoURL = imgSrc
  }

  handleModalClose(close:boolean) {
    if(close === false){
      this.isOpen = false
    }
  }
}
