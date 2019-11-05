import { Injectable } from "@angular/core";
import User from "../login/user";
import { Router } from "@angular/router";

@Injectable()
export class AuthenticationService {
  constructor(private router: Router) {}
  loggedIn: boolean = false;
  login(user: User): boolean {
    if (user.userName == "hasan" && user.password == "12345") {
      this.loggedIn = true;
      localStorage.setItem("isLogged", user.userName);
      return true;
    }
    return false;
  }
  logOut() {
    localStorage.removeItem("isLogged");
    this.loggedIn = false;
    this.router.navigateByUrl("/login");
  }
  userName() {
    return localStorage.getItem("isLogged");
  }
  isLoggedIn() {
    return this.loggedIn;
  }
}
