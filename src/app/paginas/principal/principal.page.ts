import { UsuarioService } from './../../servicios/usuario.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(private router:Router, private usuarioService:UsuarioService) { }
  serie:any 

  ngOnInit() {
  }
  
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/home')
  }


  buscarPSerie(person: any){
    this.usuarioService.searchPerson(person.value).subscribe({
      next: (data: any) => {
        this.serie = data
        console.log(this.serie);
      },
      error: (error) => {}
    })
  }


  temporada(id:any){
    this.usuarioService.detallesTemporada(id).subscribe({
      next:(datos:any)=>{
        console.log(datos)
      },error:()=>{

      }
    })
  }
}
