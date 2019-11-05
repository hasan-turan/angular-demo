import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "./services/authentication.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {}
  title = "angular-demo";
  userName: string;
  ngOnInit(): void {
    this.userName = this.authenticationService.userName();
  }
  isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }
  logOut() {
    this.authenticationService.logOut();
  }
}
