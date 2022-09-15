import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderSeriesComponent } from './slider-series.component';

describe('SliderSeriesComponent', () => {
  let component: SliderSeriesComponent;
  let fixture: ComponentFixture<SliderSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
