import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCadastrarEditarComponent } from './perfil-cadastrar-editar.component';

describe('PerfilCadastrarEditarComponent', () => {
  let component: PerfilCadastrarEditarComponent;
  let fixture: ComponentFixture<PerfilCadastrarEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilCadastrarEditarComponent]
    });
    fixture = TestBed.createComponent(PerfilCadastrarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
