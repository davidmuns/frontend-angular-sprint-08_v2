import { IPilot } from './../models/ipilot';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PilotService {
  // https://www.youtube.com/watch?v=HTivuXwS2-Y
  @Output() subscribeTrigger: EventEmitter<any> = new EventEmitter();
  pilotId!: string;

  constructor(private readonly http: HttpClient) { }

  public getPilot(url: string): Observable<IPilot> {
    return this.http.get<IPilot>(url)
  }
  
  public getPilotId(url: string): string {
    this.pilotId = url.replace(/[^0-9]+/g, "");
    return this.pilotId;
  }
}
