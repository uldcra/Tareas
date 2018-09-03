import { TestBed, inject } from '@angular/core/testing';

import { ListarEmpleadosService } from './listar-empleados.service';

describe('ListarEmpleadosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListarEmpleadosService]
    });
  });

  it('should be created', inject([ListarEmpleadosService], (service: ListarEmpleadosService) => {
    expect(service).toBeTruthy();
  }));
});
