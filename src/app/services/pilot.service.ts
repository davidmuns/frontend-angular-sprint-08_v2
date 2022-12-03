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
    
    // URL ejemplo: https://swapi.py4e.com/api/people/4/
    // Dividir url en un array de tipo string
    const arrStr: string[] = url.split('.');
    // Guardar elemento 2 del array 
    const element: string = arrStr[2];
    // Usar la expresión regular con el signo ^ que niega la expresión para reemplazar todo lo que no sean números
    this.pilotId = element.replace(/[^0-9]+/g, "");
    
    return this.pilotId;
  }
}
