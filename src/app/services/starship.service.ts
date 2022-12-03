import { IStarship } from 'src/app/models/istarship';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {
  // https://www.youtube.com/watch?v=HTivuXwS2-Y
  @Output() subscribeTrigger: EventEmitter<any> = new EventEmitter();
  baseUrl = environment.baseApi;
  pagedUrl = environment.pagedUrl;
  private starshipId!: string;
  
  constructor(private readonly http: HttpClient) { }

  getStarshipId(): string {
    return this.starshipId;
  }

  public getStarships(pageNumber: any): Observable<IStarship[]> {
    return this.http.get<IStarship[]>(`${this.pagedUrl}${pageNumber}`)
  }

  public getStarshipById(url: string): Observable<IStarship> {
    
    // URL ejemplo: https://swapi.py4e.com/api/starships/10/
    // Dividir url en un array de tipo string
    const arrStr: string[] = url.split('.');
    // Guardar elemento 2 del array 
    const element: string = arrStr[2];
    // Usar la expresión regular con el signo ^ que niega la expresión para reemplazar todo lo que no sean números
    this.starshipId = element.replace(/[^0-9]+/g, "");
  
    return this.http.get<IStarship>(this.baseUrl + 'starships/' + this.starshipId)
  }
}
