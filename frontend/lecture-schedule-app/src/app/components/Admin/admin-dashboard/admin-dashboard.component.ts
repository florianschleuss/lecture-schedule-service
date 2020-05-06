import { Component, OnInit } from "@angular/core";

import { ApiClientService } from "../../../services/api-client.service";
import { UserService } from "../../../services/user.service";

interface exam {
  value: string;
}

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.css"],
})
export class AdminDashboardComponent implements OnInit {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  exams: exam[] = [
    { value: "Klausur" },
    { value: "Modulprüfung" },
    { value: "Test" },
    { value: "Präsentation" },
    { value: "Portfolio" },
    { value: "Keine Prüfungsleistung" },
  ];
  protected displayedColumns: string[] = [
    "name",
    "course",
    "user",
    "exam",
    "start",
    "end",
  ];
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
    userEmail: string,
    course: string,
    exam: string
  ) {
    if (this.userService.getUserId() != undefined) {
      this.apiService
        .addLecture(
          userEmail,
          semesterName,
          course,
          exam,
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
