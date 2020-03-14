import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const loggedIn = JSON.parse(sessionStorage.getItem("loggedIn"));

      if(loggedIn){
        console.log("Minden szuper.");
        return true;
      }
      else{
        this.router.navigate(['login']);
        return false;
      }
  }
  
}
