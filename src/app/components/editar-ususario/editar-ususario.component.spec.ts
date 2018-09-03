import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUsusarioComponent } from './editar-ususario.component';

describe('EditarUsusarioComponent', () => {
  let component: EditarUsusarioComponent;
  let fixture: ComponentFixture<EditarUsusarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarUsusarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarUsusarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
