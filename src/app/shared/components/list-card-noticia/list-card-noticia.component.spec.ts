import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardNoticiaComponent } from './list-card-noticia.component';

describe('ListCardNoticiaComponent', () => {
  let component: ListCardNoticiaComponent;
  let fixture: ComponentFixture<ListCardNoticiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCardNoticiaComponent]
    });
    fixture = TestBed.createComponent(ListCardNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
