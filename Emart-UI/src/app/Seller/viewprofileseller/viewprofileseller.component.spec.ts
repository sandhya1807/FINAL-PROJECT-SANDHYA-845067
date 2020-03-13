import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewprofilesellerComponent } from './viewprofileseller.component';

describe('ViewprofilesellerComponent', () => {
  let component: ViewprofilesellerComponent;
  let fixture: ComponentFixture<ViewprofilesellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewprofilesellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewprofilesellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
