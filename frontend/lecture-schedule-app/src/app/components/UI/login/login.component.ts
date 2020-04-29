import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

import { ApiClientService } from "../../../services/api-client.service";
import { UserService } from "../../../services/user.service";
import { MatSnackBar } from "@angular/material";

import { SnackbarComponent } from "../snackbar/snackbar.component";

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  animations: [
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("250ms", style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class LoginComponent implements OnInit {
  hide = true;
  loading = false;

  message = "Ihr Benutzername und/oder Passwort stimmen nicht überein.";

  constructor(
    private apiService: ApiClientService,
    private router: Router,
    private userService: UserService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  registerUser(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): void {
    this.loading = true;
    this.apiService
      .addUser(firstName, lastName, email, password)
      .subscribe((data) => {
        if (data["user-id"]) {
          this.userService.setUserId(data["user-id"]);
          this.router.navigateByUrl("/dashboard");
        } else if (data["message"] == "email already present") {
          alert("Sorry....\nDie eingegeben E-Mail ist bereits vorhanden...");
        }
      });
    this.apiService.setAuthenticated(true);
  }

  loginUser(email: string, password: string): void {
    this.loading = true;
    this.apiService.authUser(email, password).subscribe((data) => {
      this.apiService.setAuthenticated(data["authenticated"]);
      if (data["admin"]) {
        this.userService.setAdmin(true);
        this.userService.setUserId(data["user-id"]);
        this.router.navigateByUrl("/admin-dashboard");
      } else if (data["authenticated"]) {
        this.userService.setUserId(data["user-id"]);
        this.router.navigateByUrl("/dashboard");
      } else {
        this.openSnackBar(this.message, "pizza-party");
      }
    });
  }

  openSnackBar(message: string, panelClass: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      panelClass: panelClass,
      duration: 10000,
    });
  }

  save(): void {
    this.loading = true;
  }
}
