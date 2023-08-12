import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoListarComponent } from './curso-listar.component';

describe('CursoListarComponent', () => {
  let component: CursoListarComponent;
  let fixture: ComponentFixture<CursoListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursoListarComponent]
    });
    fixture = TestBed.createComponent(CursoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
