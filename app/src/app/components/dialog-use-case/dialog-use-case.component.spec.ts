import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUseCaseComponent } from './dialog-use-case.component';

describe('DialogUseCaseComponent', () => {
  let component: DialogUseCaseComponent;
  let fixture: ComponentFixture<DialogUseCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUseCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUseCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
