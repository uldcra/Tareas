import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PonerComponent } from './poner.component';

describe('PonerComponent', () => {
  let component: PonerComponent;
  let fixture: ComponentFixture<PonerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PonerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
