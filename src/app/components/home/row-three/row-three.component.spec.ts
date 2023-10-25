import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowThreeComponent } from './row-three.component';

describe('RowThreeComponent', () => {
  let component: RowThreeComponent;
  let fixture: ComponentFixture<RowThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
