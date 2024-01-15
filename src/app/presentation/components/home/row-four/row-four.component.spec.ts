import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowFourComponent } from './row-four.component';

describe('RowFourComponent', () => {
  let component: RowFourComponent;
  let fixture: ComponentFixture<RowFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
