import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInfoLaboratorioComponent } from './view-info-laboratorio.component';

describe('ViewInfoLaboratorioComponent', () => {
  let component: ViewInfoLaboratorioComponent;
  let fixture: ComponentFixture<ViewInfoLaboratorioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewInfoLaboratorioComponent]
    });
    fixture = TestBed.createComponent(ViewInfoLaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
