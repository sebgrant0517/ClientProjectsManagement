import {inject} from '@angular/core';
import { Router } from '@angular/router';

export const AuthGuard = () => {
  const router = inject(Router);

  if (sessionStorage.getItem('loggedin') == 'true') {
    return true;
  }

  // Redirect to the login page
  return router.navigate(['/login']);
};