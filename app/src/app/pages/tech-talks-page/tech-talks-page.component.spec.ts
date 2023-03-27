import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechTalksPageComponent } from './tech-talks-page.component';

describe('TechTalksPageComponent', () => {
  let component: TechTalksPageComponent;
  let fixture: ComponentFixture<TechTalksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechTalksPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechTalksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
