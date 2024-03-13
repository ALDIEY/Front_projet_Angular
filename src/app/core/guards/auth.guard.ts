import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/data/services/auth/auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const authUrl = ['/auth/login'];
  const user = authService.user;

  if (user) {
    const route = getRoute(user.roles || [], state.url);

    if (state.url === '/auth/logout' || state.url === '/notifications') return true;

    if (authUrl.includes(state.url)) {
      router.navigate([route]);
      return false;
    }

    if (route !== state.url) router.navigate([route]);
    return true;
  }

  if (authUrl.includes(state.url)) return true;

  router.navigate(['/auth/login']);
  return false;
};

function getRoute(roles: string[], url: string) {
  let routes = '/404';

  if (roles.includes('admin')) {
    routes = url.startsWith('/admin') ? url : '/admin';
  }
  if (roles.includes('secretaire')) {
    routes = url.startsWith('/secretaire') ? url : '/secretaire';
  }

 

  

  return routes;
}
