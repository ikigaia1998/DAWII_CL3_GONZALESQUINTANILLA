import { TestBed } from '@angular/core/testing';

// Asegúrate de que el nombre aquí sea exactamente igual al nombre exportado en tu servicio
import { RickAndMortyService } from './rickandmorty.service';

describe('RickAndMortyService', () => {
  let service: RickAndMortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickAndMortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
