import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealoveComponent } from './realove.component';

describe('RealoveComponent', () => {
  let component: RealoveComponent;
  let fixture: ComponentFixture<RealoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
