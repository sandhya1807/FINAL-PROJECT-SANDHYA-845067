import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerEditProfileComponent } from './buyer-edit-profile.component';

describe('BuyerEditProfileComponent', () => {
  let component: BuyerEditProfileComponent;
  let fixture: ComponentFixture<BuyerEditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerEditProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
