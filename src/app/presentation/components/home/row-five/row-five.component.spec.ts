import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowFiveComponent } from './row-five.component';

describe('RowFiveComponent', () => {
  let component: RowFiveComponent;
  let fixture: ComponentFixture<RowFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
