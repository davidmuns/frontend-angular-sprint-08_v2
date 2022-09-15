import { Router } from '@angular/router';
import { IStarship } from 'src/app/models/istarship';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.css']
})
export class StarshipDetailComponent implements OnInit {
  starship!: IStarship;
  id!: string;
  img: string = '';
  defImg: string = '';
  constructor(private dataService: DataService, private readonly router: Router) {
    this.id = this.dataService.starshipId;
    this.img = `https://starwars-visualguide.com/assets/img/starships/${this.id}.jpg`;
    this.dataService.subscribeTrigger.subscribe(
      data => {
        this.starship = data;
      }
    )
  }

  ngOnInit(): void { }

  public gotoStarships() {
    this.router.navigate(['starship/all']);
  }


}

