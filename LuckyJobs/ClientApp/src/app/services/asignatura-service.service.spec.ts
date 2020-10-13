import { TestBed } from '@angular/core/testing';

import { AsignaturaServiceService } from './asignatura-service.service';

describe('AsignaturaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsignaturaServiceService = TestBed.get(AsignaturaServiceService);
    expect(service).toBeTruthy();
  });
});
