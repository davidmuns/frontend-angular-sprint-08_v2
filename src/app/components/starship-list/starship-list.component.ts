import { PilotService } from './../../services/pilot.service';
import { StarshipService } from '../../services/starship.service';
import { Component, OnInit } from '@angular/core';
import { IStarship } from 'src/app/models/istarship';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.css'],
})
export class StarshipListComponent implements OnInit {
  starships: Array<IStarship> = [];
  starship!: IStarship;
  pageNumber: number;
  isNextBtnDisabled: boolean;
  isPreviousBtnDisabled: boolean;
  urlPilots: Array<string>;

  constructor(
    private starshipService: StarshipService,
    private router: Router,
    private pilotService: PilotService
  ) {
    this.isPreviousBtnDisabled = false;
    this.isNextBtnDisabled = false;
    this.pageNumber = 1;
    this.getStarships();
    this.urlPilots = [];
  }

  ngOnInit(): void {}

  public goNext() {
    this.pageNumber++;
    if (this.pageNumber >= 4) {
      this.isNextBtnDisabled = true;
      this.pageNumber = 4;
    } else {
      this.isNextBtnDisabled = false;
      this.isPreviousBtnDisabled = false;
    }
    this.getStarships();
  }

  public goPrevious() {
    this.pageNumber--;
    if (this.pageNumber <= 1) {
      this.isPreviousBtnDisabled = true;
      this.pageNumber = 1;
    } else {
      this.isPreviousBtnDisabled = false;
      this.isNextBtnDisabled = false;
    }
    this.getStarships();
  }

  public getStarships() {
    this.starshipService
      .getStarships(this.pageNumber)
      .subscribe((data: any) => {
        this.starships = data.results;
      });
  }

  public getStarshipById(url: string) {
    this.starshipService.getStarshipById(url).subscribe((data: IStarship) => {
      this.starship = data;
      this.urlPilots = data.pilots;
      this.starshipService.subscribeTrigger.emit(this.starship);
      this.pilotService.subscribeTrigger.emit(this.urlPilots);
    });
    this.router.navigate(['starship']);
    console.log(this.starship);
    console.log(this.urlPilots);
  }

  public getStarship() {
    return this.starship;
  }
}
