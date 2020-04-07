import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

import { ApiClientService } from "../services/api-client.service";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(
    private apiService: ApiClientService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {}

  registerUser(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): void {
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
    this.apiService.authUser(email, password).subscribe((data) => {
      this.apiService.setAuthenticated(data["authenticated"]);
      if (data["authenticated"]) {
        this.userService.setUserId(data["user-id"]);
        this.router.navigateByUrl("/dashboard");
      } else {
        alert("Sorry....\nDie eingegeben Daten sind nicht korrekt...");
      }
    });
  }
}
