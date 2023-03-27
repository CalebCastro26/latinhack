import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWeArePageComponent } from './who-we-are-page.component';

describe('WhoWeArePageComponent', () => {
  let component: WhoWeArePageComponent;
  let fixture: ComponentFixture<WhoWeArePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoWeArePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoWeArePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
