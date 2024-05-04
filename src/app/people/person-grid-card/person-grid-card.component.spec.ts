import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonGridCardComponent } from './person-grid-card.component';

describe('PersonGridCardComponent', () => {
  let component: PersonGridCardComponent;
  let fixture: ComponentFixture<PersonGridCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonGridCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonGridCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
