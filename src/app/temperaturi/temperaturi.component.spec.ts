import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturiComponent } from './temperaturi.component';

describe('TemperaturiComponent', () => {
  let component: TemperaturiComponent;
  let fixture: ComponentFixture<TemperaturiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperaturiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperaturiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
