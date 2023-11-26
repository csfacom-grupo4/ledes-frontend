import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoPesquisaComponent } from './campo-pesquisa.component';

describe('CampoPesquisaComponent', () => {
  let component: CampoPesquisaComponent;
  let fixture: ComponentFixture<CampoPesquisaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampoPesquisaComponent]
    });
    fixture = TestBed.createComponent(CampoPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
