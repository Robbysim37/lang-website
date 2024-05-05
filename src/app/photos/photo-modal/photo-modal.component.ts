import { Component,Input,Output,EventEmitter,HostListener } from '@angular/core';

@Component({
  selector: 'app-photo-modal',
  templateUrl: './photo-modal.component.html',
  styleUrl: './photo-modal.component.css'
})
export class PhotoModalComponent {
  @Input() imgSrc: string = "";
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostListener('click', ['$event'])
  onClickOutside(event: MouseEvent) {
    // Check if the click occurred outside the modal content
    if ((event.target as HTMLElement).classList.contains('modal-overlay') ||
        (event.target as HTMLElement).classList.contains('modal-content')) {
      // Emit an event to inform the parent component to close the modal
      this.closeModal.emit(false);
    }
  }
}
