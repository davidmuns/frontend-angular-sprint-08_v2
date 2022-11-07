import { PilotService } from './../../services/pilot.service';
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
  pilotsUrl!: string [];
  
  constructor(private starshipService: StarshipService, private readonly router: Router, private pilotService: PilotService) {
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
    //console.log(this.starship?.pilots);
   
    this.pilotService.subscribeTrigger.emit(this.starship?.pilots);
    
    this.router.navigate(['pilots']);
    
    // this.pilotService.subscribeTrigger.emit(this.starship?.pilots);
    // let acc = 0;
    // this.pilotService.subscribeTrigger.subscribe(data => {
    //   if (data.length > 0) {
    //     data.forEach((url: string) => {
    //       this.pilotsUrl.push(url);
          
    //     });
    //   }
    // })
    //this.router.navigate(['pilots']);
  }

  onHidePilots(){
    this.showPilots = false;
  }


}

