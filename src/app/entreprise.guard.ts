import { Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseGuard implements CanActivate{


  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('loggedUserRole') == 'ENT')
      return true
    else {
      this.router.navigate(['forbidden'])
      return false
    }
  }
}
