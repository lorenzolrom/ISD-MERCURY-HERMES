import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockRequestComponent } from './lock-request.component';

describe('LockRequestComponent', () => {
  let component: LockRequestComponent;
  let fixture: ComponentFixture<LockRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
