import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedStatusComponent } from './led-status.component';

describe('LedStatusComponent', () => {
  let component: LedStatusComponent;
  let fixture: ComponentFixture<LedStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
