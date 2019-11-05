import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";
@Injectable()
export default class LoginGuard implements CanActivate {
  constructor(
    private accountService: AuthenticationService,
    private router: Router
  ) {}
  canActivate(
    route: import("@angular/router").ActivatedRouteSnapshot,
    state: import("@angular/router").RouterStateSnapshot
  ): boolean {
    let logged = this.accountService.isLoggedIn();
    if (logged) {
      return true;
    }
    this.router.navigate(["login"], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
