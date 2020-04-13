import { Component, OnInit } from "@angular/core";

import { ApiClientService } from "../../services/api-client.service";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-user-account",
  templateUrl: "./user-account.component.html",
  styleUrls: ["./user-account.component.css"],
})
export class UserAccountComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  lastName(): string {
    return this.userService.getUser()[1];
  }

  firstName(): string {
    return this.userService.getUser()[0];
  }
}
