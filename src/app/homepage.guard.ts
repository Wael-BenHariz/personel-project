import { Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HomepageGuard implements CanActivate{


  constructor(private router : Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(localStorage.getItem('isConnected') === 'false' || !localStorage.getItem('isConnected'))
      return true
    else {
      this.router.navigate(['forbidden'])
      return false 
    }
  }
}
