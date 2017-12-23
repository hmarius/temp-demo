import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReteaComponent } from './retea.component';

describe('ReteaComponent', () => {
  let component: ReteaComponent;
  let fixture: ComponentFixture<ReteaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReteaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReteaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
