import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTareasComponent } from './editar-tareas.component';

describe('EditarTareasComponent', () => {
  let component: EditarTareasComponent;
  let fixture: ComponentFixture<EditarTareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarTareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
