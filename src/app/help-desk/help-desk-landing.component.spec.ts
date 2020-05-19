import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HelpDeskLandingComponent } from './help-desk-landing.component';
import { MatTableModule } from "@angular/material/table";

describe('HelpDeskLandingComponent', () => {
  let component: HelpDeskLandingComponent;
  let fixture: ComponentFixture<HelpDeskLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpDeskLandingComponent ],
      imports: [MatTableModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpDeskLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
