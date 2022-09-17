import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider-series',
  templateUrl: './slider-series.component.html',
  styleUrls: ['./slider-series.component.css'],
  providers: [NgbCarouselConfig]
})
export class SliderSeriesComponent implements OnInit {

  constructor( config: NgbCarouselConfig ) {
    config.interval = 3000;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
  }

}
