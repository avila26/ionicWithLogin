import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginupGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  
  if(!token){
    router.navigateByUrl('/home')
    return false;
  } 
  return true;
};
