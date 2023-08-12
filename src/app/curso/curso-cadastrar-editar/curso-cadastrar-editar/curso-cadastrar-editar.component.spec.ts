import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoCadastrarEditarComponent } from './curso-cadastrar-editar.component';

describe('CursoCadastrarEditarComponent', () => {
  let component: CursoCadastrarEditarComponent;
  let fixture: ComponentFixture<CursoCadastrarEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursoCadastrarEditarComponent]
    });
    fixture = TestBed.createComponent(CursoCadastrarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
