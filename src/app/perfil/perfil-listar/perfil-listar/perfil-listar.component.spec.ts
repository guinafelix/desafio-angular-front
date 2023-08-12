import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilListarComponent } from './perfil-listar.component';

describe('PerfilListarComponent', () => {
  let component: PerfilListarComponent;
  let fixture: ComponentFixture<PerfilListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilListarComponent]
    });
    fixture = TestBed.createComponent(PerfilListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
