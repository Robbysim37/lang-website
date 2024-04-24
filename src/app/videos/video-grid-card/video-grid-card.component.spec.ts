import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGridCardComponent } from './video-grid-card.component';

describe('VideoGridCardComponent', () => {
  let component: VideoGridCardComponent;
  let fixture: ComponentFixture<VideoGridCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoGridCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoGridCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
