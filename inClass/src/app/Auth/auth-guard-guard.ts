import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  // logic to check if the user is authenticated
  const isLoggedIn = Math.random() > 0.5;
  console.log(isLoggedIn);  

  // if(!isLoggedIn) {
  //   router.navigate(['/day5']);
  // }
  return true;
};
