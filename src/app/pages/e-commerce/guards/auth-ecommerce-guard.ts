import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authEcommerceGuard: CanActivateFn = (route, state) => {

  const login=localStorage.getItem('loginInfo');
 const router=inject(Router);
  if(login){
    return true;
  }

  router.navigate(['/auth/login']);

  return false;
};
