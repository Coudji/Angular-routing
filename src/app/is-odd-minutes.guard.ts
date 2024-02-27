import { CanActivateFn } from '@angular/router';

export const isOddMinutesGuard: CanActivateFn = (route, state) => {
  const time = new Date()
  if(time.getMinutes() %2 !==0){
    return true
  }
  
  return false;
};
