import { Router } from '@angular/router';
import { IStarship } from 'src/app/models/istarship';
import { StarshipService } from '../../services/starship.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.css']
})
export class StarshipDetailComponent implements OnInit {
  starship!: IStarship | null | undefined;
  id!: string;
  img: string = '';
  defImg: string = '';
  showPilots: boolean = false;
  
  constructor(private starshipService: StarshipService, private readonly router: Router) {
    this.id = this.starshipService.getStarshipId();
    this.img = `https://starwars-visualguide.com/assets/img/starships/${this.id}.jpg`;
    this.starshipService.subscribeTrigger.subscribe(
      data => {
        this.starship = data;
      }
    )
  }

  ngOnInit(): void { }

  public gotoStarships() {
    this.router.navigate(['starship/all']);
  }

  onShowPilots(){
    this.showPilots = true;
  }

  onHidePilots(){
    this.showPilots = false;
  }


}

