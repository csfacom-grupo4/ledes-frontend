import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarPapelVinculoComponent } from './gerenciar-papel-vinculo.component';

describe('GerenciarPapelVinculoComponent', () => {
  let component: GerenciarPapelVinculoComponent;
  let fixture: ComponentFixture<GerenciarPapelVinculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenciarPapelVinculoComponent]
    });
    fixture = TestBed.createComponent(GerenciarPapelVinculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
