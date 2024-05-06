import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPageGridComponent } from './full-page-grid.component';

describe('FullPageGridComponent', () => {
  let component: FullPageGridComponent;
  let fixture: ComponentFixture<FullPageGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullPageGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullPageGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
