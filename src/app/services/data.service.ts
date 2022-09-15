import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  @Output() subscribeTrigger: EventEmitter<any> = new EventEmitter();
  baseUrl = environment.baseApi;
  pagedUrl = environment.pagedUrl;
  starshipId!: string;
  constructor(private readonly http: HttpClient) { }

  public getStarships(pageNumber: any): Observable<any> {
    return this.http.get<any>(`${this.pagedUrl}${pageNumber}`)
  }

  public getStarshipById(url: string) {
    this.starshipId = url.replace(/[^0-9]+/g, "");
    return this.http.get<any>(`${this.baseUrl}/${this.starshipId}`)
  }
}
