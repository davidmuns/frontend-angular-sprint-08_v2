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
    this.starshipId = url.replace(/[^0-9]+/g, "");
    return this.http.get<IStarship>(`${this.baseUrl}${this.starshipId}`)
  
  }
}
