import { loginupGuard } from './guard/loginup.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { loginGuard } from './guard/login.guard';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
     canActivate:[loginGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registrar',
    loadChildren: () => import('./paginas/registrar/registrar.module').then( m => m.RegistrarPageModule),
    canActivate:[loginGuard]
  },
  {
    path: 'principal',
    loadChildren: () => import('./paginas/principal/principal.module').then( m => m.PrincipalPageModule),
    canActivate:[loginupGuard]
  },
  {
    path: 'serie/:id',canActivate:[loginupGuard],
    loadChildren: () => import('./paginas/serie/serie.module').then( m => m.SeriePageModule)
  },
  {
    path: 'episodios/:id',canActivate:[loginupGuard],
    loadChildren: () => import('./paginas/episodios/episodios.module').then( m => m.EpisodiosPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
