import { async, ComponentFixture, TestBed } from '@angular/core/testing';



import { RegisterSellerComponent } from './registerseller.component';

describe('RegistersellerComponent', () => {
  let component:RegisterSellerComponent;
  let fixture: ComponentFixture<RegisterSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterSellerComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
