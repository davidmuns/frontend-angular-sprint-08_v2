import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider-films',
  templateUrl: './slider-films.component.html',
  styleUrls: ['./slider-films.component.css'],
  providers: [NgbCarouselConfig]
})
export class SliderFilmsComponent implements OnInit {

  constructor( config: NgbCarouselConfig ) {
    config.interval = 3000;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.showNavigationIndicators = false;
  }
  ngOnInit(): void {
  }

}
