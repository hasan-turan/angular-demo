import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, NgForm } from "@angular/forms";
import { AuthenticationService } from "../services/authentication.service";
import { AlertifyService } from "../services/alertify.service";
import User from "./user";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private alertifyService: AlertifyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  loginForm: FormGroup;
  returnUrl: string = "";
  user: User = new User();
  createForm() {
    this.loginForm = this.formBuilder.group({
      userName: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  ngOnInit() {
    this.createForm();
  }

  login(form: NgForm) {
    this.user = Object.assign({}, this.loginForm.value);
    if (this.loginForm.valid) {
      let isLoggedIn: boolean = this.authenticationService.login(this.user);
      if (isLoggedIn) {
        this.route.queryParams.subscribe(params => {
          this.returnUrl = params["returnUrl"];
        });
        this.alertifyService.showInfo("You are successfully logged in!");
        this.router.navigateByUrl(this.returnUrl);
      } else {
        this.alertifyService.showError("Username or password is incorrect");
      }
    }
  }
}
