import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUniversityComponent } from './dialog-university.component';

describe('DialogUniversityComponent', () => {
  let component: DialogUniversityComponent;
  let fixture: ComponentFixture<DialogUniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUniversityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
