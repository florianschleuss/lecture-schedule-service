import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { Router } from "@angular/router";
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from "@angular/cdk/layout";

import { ApiClientService } from "../../services/api-client.service";
import { UserService } from "../../services/user.service";

/**
 * @title Table with expandable rows
 */
@Component({
  selector: "app-lecture-table",
  templateUrl: "./lecture-table.component.html",
  styleUrls: ["./lecture-table.component.css"],
})
export class LectureTableComponent {
  protected dataSource: JSON = JSON.parse("[]");
  protected columnNames = {
    name: "Vorlesung",
    course: "Kurs",
    exam: "Prüfung",
    start: "Vorlesungsstart",
    end: "Vorlesungsende",
  };
  protected columnsToDisplay = ["name", "course", "exam", "start", "end"];

  constructor(
    private apiService: ApiClientService,
    private userService: UserService,
    private router: Router,
    breakpointObserver: BreakpointObserver
  ) {
    breakpointObserver.observe(["(max-width: 600px)"]).subscribe((result) => {
      this.columnsToDisplay = result.matches
        ? ["name", "course"]
        : ["name", "course", "exam", "start", "end"];
    });
  }

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
