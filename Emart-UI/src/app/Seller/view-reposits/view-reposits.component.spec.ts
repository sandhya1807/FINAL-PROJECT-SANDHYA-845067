import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRepositsComponent } from './view-reposits.component';

describe('ViewRepositsComponent', () => {
  let component: ViewRepositsComponent;
  let fixture: ComponentFixture<ViewRepositsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRepositsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRepositsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
