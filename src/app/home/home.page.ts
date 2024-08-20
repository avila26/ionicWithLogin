import { UsuarioService } from './../servicios/usuario.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private usuarioService:UsuarioService, private router: Router) {}

  login(email: any, password: any) {
    this.usuarioService.login(email.value, password.value).subscribe({
      next: (data: any) => {

        localStorage.setItem('user', data.dataUser.user);
        localStorage.setItem('token', data.token);
        localStorage.setItem('idu', data.dataUser.id);
        this.router.navigateByUrl('/principal')
      },
      error: (error: any) => {
        debugger;
      },
    });
  }
}
