import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoSobreNosComponent } from './edicao-sobre-nos.component';

describe('EdicaoSobreNosComponent', () => {
  let component: EdicaoSobreNosComponent;
  let fixture: ComponentFixture<EdicaoSobreNosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdicaoSobreNosComponent]
    });
    fixture = TestBed.createComponent(EdicaoSobreNosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
