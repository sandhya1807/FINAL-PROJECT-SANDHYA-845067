import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockunblockBuyerComponent } from './blockunblock-buyer.component';

describe('BlockunblockBuyerComponent', () => {
  let component: BlockunblockBuyerComponent;
  let fixture: ComponentFixture<BlockunblockBuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockunblockBuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockunblockBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
