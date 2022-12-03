import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { StarshipService } from './starship.service';

describe('StarshipService', () => {
  let service: StarshipService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(StarshipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Name starship should be Millennium Falcom', () => {
    const starshipUrl = 'https://swapi.py4e.com/api/starships/10/';
    service.getStarshipById(starshipUrl).subscribe( data => {
        expect( data.name ).toEqual('Millennium'); 
    })
    
  })
});
