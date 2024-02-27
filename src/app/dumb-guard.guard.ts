import { CanActivateFn } from '@angular/router';

export const dumbGuardGuard: CanActivateFn = (route, state) => {
  // si ça renvoit vrai alors on peut accéder à la route.
  // si ça renvoit faux alors on ne peut pas accéder à pa route. Le component n'est pas "activé"
  return true;
};
