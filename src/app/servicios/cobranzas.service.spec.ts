import { TestBed, inject } from '@angular/core/testing';

import { CobranzasService } from './cobranzas.service';

describe('CobranzasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CobranzasService]
    });
  });

  it('should be created', inject([CobranzasService], (service: CobranzasService) => {
    expect(service).toBeTruthy();
  }));
});
