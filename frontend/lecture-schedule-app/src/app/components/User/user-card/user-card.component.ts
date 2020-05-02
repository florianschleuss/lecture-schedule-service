import { Component, OnInit } from "@angular/core";

import { UserService } from "../../../services/user.service";

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.css"],
})
export class UserCardComponent implements OnInit {
  name = "test";
  mailText: string = "";

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.mailText =
      "mailto:danielschworm@t-online.de,florian.schleuss@hpe.com,tobias.strauss@hpe.com?subject=Hilfe&body";
  }

  mailMe() {
    this.mailText =
      "mailto:danielschworm@t-online.de,florian.schleuss@hpe.com,tobias.strauss@hpe.com?subject=Hilfe&body";
    window.location.href = this.mailText;
  }

  firstName(): string {
    return this.userService.getUser()[0];
  }

  lastName(): string {
    return this.userService.getUser()[1];
  }

  email(): string {
    return this.userService.getUser()[2];
  }

  password(): string {
    return this.userService.getUser()[3];
  }
}
