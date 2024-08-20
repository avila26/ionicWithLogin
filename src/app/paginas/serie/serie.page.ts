import {  ActivatedRoute} from '@angular/router';
import { UsuarioService } from './../../servicios/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.page.html',
  styleUrls: ['./serie.page.scss'],
})

export class SeriePage implements OnInit {
  id: string | null = null;
  temporada:any

  constructor(private usuarioService:UsuarioService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.detallesTemporada()
  }

 detallesTemporada() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    
      this.usuarioService.detallesTemporada(this.id).subscribe({
        next: (data: any) => {
          console.log(data);
          this.temporada = data;
        },
        error: (error: any) => {
          console.error(error);
        }
      });
      }
}
