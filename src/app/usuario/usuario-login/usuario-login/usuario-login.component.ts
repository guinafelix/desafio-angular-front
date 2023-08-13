import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../usuario.service';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.scss']
})
export class UsuarioLoginComponent {
   formGroup: FormGroup;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

  async onSubmit() {
    try {
      const result = await this.usuarioService.login(this.formGroup.value)
      console.log(result)
      this.router.navigate(['/'])
    }catch(error) {
      console.log(error)
    }
  }
}
