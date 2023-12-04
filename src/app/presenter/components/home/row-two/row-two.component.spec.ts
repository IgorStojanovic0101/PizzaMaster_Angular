import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowTwoComponent } from './row-two.component';

describe('RowTwoComponent', () => {
  let component: RowTwoComponent;
  let fixture: ComponentFixture<RowTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
