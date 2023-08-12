import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoListarMatrizComponent } from './curso-listar-matriz.component';

describe('CursoListarMatrizComponent', () => {
  let component: CursoListarMatrizComponent;
  let fixture: ComponentFixture<CursoListarMatrizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursoListarMatrizComponent]
    });
    fixture = TestBed.createComponent(CursoListarMatrizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
