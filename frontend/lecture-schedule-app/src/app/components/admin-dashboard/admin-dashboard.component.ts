import { Component, OnInit } from "@angular/core";

import { ApiClientService } from "../../services/api-client.service";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.css"],
})
export class AdminDashboardComponent implements OnInit {
  protected displayedColumns: string[] = ["name", "start", "end", "user"];
  protected dataSource: JSON = JSON.parse("[]");

  constructor(
    private apiService: ApiClientService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    if (this.userService.getUserId() != undefined) {
      this.apiService
        .getSemester()
        .subscribe((data) => (this.dataSource = data));
    }
  }

  onSubmit(
    semesterName: string,
    semesterStart: string,
    semesterEnde: string,
    userEmail: string
  ) {
    if (this.userService.getUserId() != undefined) {
      this.apiService
        .addLecture(
          userEmail,
          semesterName,
          "test",
          "exam",
          semesterStart,
          semesterEnde
        )
        .subscribe((response) => {
          this.apiService
            .getSemester()
            .subscribe((data) => (this.dataSource = data));
        });
    }
  }
}
