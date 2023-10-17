import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUnitarioPapelVinculoComponent } from './form-unitario-papel-vinculo.component';

describe('FormUnitarioPapelVinculoComponent', () => {
  let component: FormUnitarioPapelVinculoComponent;
  let fixture: ComponentFixture<FormUnitarioPapelVinculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormUnitarioPapelVinculoComponent]
    });
    fixture = TestBed.createComponent(FormUnitarioPapelVinculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
