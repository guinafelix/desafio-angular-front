import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCadastrarEditarComponent } from './usuario-cadastrar-editar.component';

describe('UsuarioCadastrarEditarComponent', () => {
  let component: UsuarioCadastrarEditarComponent;
  let fixture: ComponentFixture<UsuarioCadastrarEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioCadastrarEditarComponent]
    });
    fixture = TestBed.createComponent(UsuarioCadastrarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
