import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.page.html',
  styleUrls: ['./episodios.page.scss'],
})


export class EpisodiosPage implements OnInit {

  id:string | null= null;
  episodios:any;

  constructor( private UsuarioService: UsuarioService, private ActivatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.detallesEpisodios();
  }

  detallesEpisodios() {
    this.id = this.ActivatedRoute.snapshot.paramMap.get('id')

    this.UsuarioService.detallesepisodios(this.id).subscribe({
      next:(data:any) => {
        console.log(data);
        this.episodios = data;
      },
      error: (error: any) => {
        console.error(error);
      }
    })
  }
}
