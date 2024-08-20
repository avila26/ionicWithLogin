import { Router } from '@angular/router';
import { UsuarioService } from './../../servicios/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit() {}
  logout() {
    this.router.navigateByUrl('/home');
  }

  register(user: any, email: any, password: any) {
    this.usuarioService
      .register(user.value, email.value, password.value)
      .subscribe({
        next: (data: any) => {
          localStorage.setItem('user', data.users.user);
          localStorage.setItem('token', data.token);
          localStorage.setItem('idu', data.users.id);

          this.router.navigateByUrl('/principal');
          console.log(data);
        },
        error: (error: any) => {
          debugger;
        },
      });
  }
}
