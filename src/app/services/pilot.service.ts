import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PilotService {
  @Output() subscribeTrigger: EventEmitter<any> = new EventEmitter();

  constructor(private readonly http: HttpClient) { }

  public getPilot(url: string): Observable<any> {
    return this.http.get<any>(url)
  }
}
