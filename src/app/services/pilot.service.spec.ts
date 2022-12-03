import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PilotService } from './pilot.service';

describe('PilotService', () => {
  let service: PilotService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PilotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Name pilot should be Chewbacca', () => {
    const url = 'https://swapi.py4e.com/api/people/13/';
    service.getPilot(url).subscribe( data => {
      expect( data.name ).toBe('Chewbacca');
      expect( data.birth_year ).toBe('200BBY');

      
    })
  })
});
