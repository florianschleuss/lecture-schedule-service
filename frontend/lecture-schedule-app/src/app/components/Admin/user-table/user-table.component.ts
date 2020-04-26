import { Component, OnInit } from "@angular/core";

import { ApiClientService } from "../../../services/api-client.service";
import { UserService } from "../../../services/user.service";

@Component({
  selector: "app-user-table",
  templateUrl: "./user-table.component.html",
  styleUrls: ["./user-table.component.css"],
})
export class UserTableComponent implements OnInit {
  protected displayedUserColumns: string[] = ["firstName", "lastName", "email"];
  protected userSource: JSON = JSON.parse("[]");

  constructor(
    private apiService: ApiClientService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    if (this.userService.getUserId() != undefined) {
      this.apiService.getUsers().subscribe((data) => {
        this.userSource = data["users"];
      });
    }
  }
}
