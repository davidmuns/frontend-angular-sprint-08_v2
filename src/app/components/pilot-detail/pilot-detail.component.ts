import { Router } from '@angular/router';
import { IPilot } from './../../models/ipilot';
import { PilotService } from './../../services/pilot.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pilot-detail',
  templateUrl: './pilot-detail.component.html',
  styleUrls: ['./pilot-detail.component.css']
})
export class PilotDetailComponent implements OnInit {

  pilot!: IPilot;
  pilots: IPilot[] = [];
  pilotId!: string;
  pilotImgs: string[] = [];
  pilotImg!: string;
  defImg!: string;

  constructor(private pilotService: PilotService, private router: Router) {
    this.pilotService.subscribeTrigger.subscribe(data => {
      // data.forEach((url: any) => this.getPilot(url))
      if (data.length > 0) {
        data.forEach((url: string) => {
          this.getPilot(url);
        });
      }
    })
  }

  ngOnInit(): void {

  }

  getPilot(url: string): void {
    this.pilotService.getPilot(url).subscribe(data => {
      this.pilot = data;
      this.pilotId = this.getPilotId(url);
      this.pilotImg = `https://starwars-visualguide.com/assets/img/characters/${this.pilotId}.jpg`;
      this.pilotImgs.push(this.pilotImg);
      this.pilots.push(this.pilot);
    })
  }

  getPilotId(url: string): string {
    return this.pilotService.getPilotId(url);
  }

  public gotoStarships() {
    this.router.navigate(['starship/all']);
  }

}
