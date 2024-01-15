import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowSixComponent } from './row-six.component';

describe('RowSixComponent', () => {
  let component: RowSixComponent;
  let fixture: ComponentFixture<RowSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
