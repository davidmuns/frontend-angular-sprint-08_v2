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

  constructor(private pilotService: PilotService) { 
    this.pilotService.subscribeTrigger.subscribe(data => {
      // data.forEach((url: any) => this.getPilot(url))
      if(data.length > 0){
        data.forEach((url: string) => {
          this.getPilot(url)
        });
      }   
    })
  }

  ngOnInit(): void {
    
  }

  getPilot(url: string): void{
    this.pilotService.getPilot(url).subscribe(data => {
      this.pilot = data;
      this.pilots.push(this.pilot);
    })
  }

}
