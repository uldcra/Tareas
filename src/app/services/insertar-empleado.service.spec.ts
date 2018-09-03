import { TestBed, inject } from '@angular/core/testing';

import { InsertarEmpleadoService } from './insertar-empleado.service';

describe('InsertarEmpleadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InsertarEmpleadoService]
    });
  });

  it('should be created', inject([InsertarEmpleadoService], (service: InsertarEmpleadoService) => {
    expect(service).toBeTruthy();
  }));
});
