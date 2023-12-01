import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleButtonNoticiaComponent } from './circle-button-noticia.component';

describe('CircleButtonNoticiaComponent', () => {
  let component: CircleButtonNoticiaComponent;
  let fixture: ComponentFixture<CircleButtonNoticiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircleButtonNoticiaComponent]
    });
    fixture = TestBed.createComponent(CircleButtonNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
