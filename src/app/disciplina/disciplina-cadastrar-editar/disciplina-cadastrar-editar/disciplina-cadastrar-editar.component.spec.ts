import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinaCadastrarEditarComponent } from './disciplina-cadastrar-editar.component';

describe('DisciplinaCadastrarEditarComponent', () => {
  let component: DisciplinaCadastrarEditarComponent;
  let fixture: ComponentFixture<DisciplinaCadastrarEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisciplinaCadastrarEditarComponent]
    });
    fixture = TestBed.createComponent(DisciplinaCadastrarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
