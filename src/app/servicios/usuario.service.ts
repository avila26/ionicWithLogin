import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  
  constructor(private http: HttpClient) {}

  
  login(email: string, password: string) {
    let datos = {
      email: email,
      password: password
    }
    return this.http.post('http://127.0.0.1:3000/api/login', datos)
  }
  
  register(user: string, email: string, password: string ){
    let datos = {
      user:user,
      email:email,
      password:password
    }
    return this.http.post('http://127.0.0.1:3000/api/register', datos)
  }

  searchPerson(nombrePer: string){
    return this.http.get(
      `https://api.tvmaze.com/search/shows?q=${nombrePer}`
    )
  }

  detallesTemporada(id:any){
    return this.http.get(`https://api.tvmaze.com/shows/${id}/seasons`)

  }

  detallesepisodios(id:any){
    return this.http.get( `https://api.tvmaze.com/seasons/${id}/episodes`)
  }


}
