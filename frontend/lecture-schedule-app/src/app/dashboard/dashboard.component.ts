import { Component, OnInit } from "@angular/core";

import { UserService } from "../services/user.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  protected lectureCount: Number = 7;

  constructor(private userService: UserService) {}

  getLectureCount(): number {
    return this.userService.getLectureCount();
  }

  ngOnInit() {}
}
