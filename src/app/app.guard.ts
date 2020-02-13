import { Injectable, Inject } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
// import { LOCAL_STORAGE, SESSION_STORAGE, WebStorageService } from "angular-webstorage-service";

@Injectable()
export class AuthGuardService implements CanActivate {
    private user: any = [];

    constructor(private router: Router) {
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        var token = localStorage.getItem('token');
        if (token == null) {
            this.router.navigate(['/login']);
        } else {
            if (this.user) {
                if (route.data.roles && route.data.roles.indexOf(this.user.user_role) === -1) {
                    // role not authorised so redirect to home page
                    this.router.navigate(['/dashboard']);
                    return false;
                }
                return true
            }
        }
    }
}