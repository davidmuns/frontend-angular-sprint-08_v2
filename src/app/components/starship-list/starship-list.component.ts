import { DataService } from '../../services/data.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { IStarship } from 'src/app/models/istarship';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.css']
})

export class StarshipListComponent implements OnInit {
  starships: Array<IStarship> = [];
  starship!: IStarship;
  pageNumber: number;
  isNextBtnDisabled: boolean;
  isPreviousBtnDisabled: boolean;

  constructor(private dataService: DataService, private router: Router) {
    this.isPreviousBtnDisabled = false;
    this.isNextBtnDisabled = false;
    this.pageNumber = 1;
    this.getStarships();
  }

  ngOnInit(): void {

  }

  public goNext() {
    this.pageNumber++;
    if (this.pageNumber > 4) {
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
    if (this.pageNumber < 1) {
      this.isPreviousBtnDisabled = true;
      this.pageNumber = 1;
    } else {
      this.isPreviousBtnDisabled = false;
      this.isNextBtnDisabled = false;
    }
    this.getStarships();
  }

  public getStarships() {
    this.dataService.getStarships(this.pageNumber).subscribe(
      (data: any) => {
        this.starships = data.results;
      }
    )
  }

  public getStarshipById(url: string) {
    this.dataService.getStarshipById(url).subscribe(
      (data: any) => {
        this.starship = data;
        this.dataService.subscribeTrigger.emit(this.starship);
      }
    )
    this.router.navigate(['starship'])
  }

  public getStarship() {
    return this.starship;
  }
}
