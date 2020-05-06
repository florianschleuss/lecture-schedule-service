import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ApiClientService } from "../../../services/api-client.service";
import { UserService } from "../../../services/user.service";

@Component({
  selector: "app-lecture-table",
  templateUrl: "./lecture-table.component.html",
  styleUrls: ["./lecture-table.component.css"],
})
export class LectureTableComponent {
  protected displayedColumns: string[] = [
    "name",
    "course",
    "exam",
    "start",
    "end",
  ];
  protected dataSource: JSON = JSON.parse("[]");

  constructor(
    private apiService: ApiClientService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.apiService
      .getLectures(this.userService.getUserId())
      .subscribe((data) => {
        this.dataSource = data;
        this.userService.setLectureCount(Object.keys(data).length);
      });
  }

  onItemClick(element: JSON): void {
    this.userService.setLectureId(element["lecture-id"]);
    this.router.navigateByUrl("/forms");
  }
}
