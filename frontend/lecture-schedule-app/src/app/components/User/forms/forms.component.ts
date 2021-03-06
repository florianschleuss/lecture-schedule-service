import { Component, OnInit } from "@angular/core";
import { NgForm, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { ApiClientService } from "../../../services/api-client.service";
import { UserService } from "../../../services/user.service";

interface exam {
  value: string;
}

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.css"],
})
export class FormsComponent implements OnInit {
  submitted = false;

  exams: exam[] = [
    { value: "Klausur" },
    { value: "Modulprüfung" },
    { value: "Test" },
    { value: "Präsentation" },
    { value: "Portfolio" },
    { value: "Keine Prüfungsleistung" },
  ];

  protected title: string = "Neue Vorlesung anlegen";
  protected name: string = "";
  protected course: string = "";
  protected exam: string = "";
  private lectureId: string;

  lectureForm = this.fb.group({
    lecture: [null, Validators.required],
    course: [null, Validators.required],
    exam: [null],
    examDate: [null],
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private apiService: ApiClientService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.userService.getLectureId()) {
      this.apiService
        .getLecture(
          this.userService.getUserId(),
          this.userService.getLectureId()
        )
        .subscribe((data) => {
          this.title = data["name"];
          this.lectureId = data["lecture-id"];
          this.name = data["name"];
          this.course = data["course"];
          this.exam = data["exam"];
        });
    }
  }

  onSubmit(form: NgForm) {
    this.apiService
      .addLecture(
        this.userService.getUserId(),
        form.value.lecture,
        form.value.course,
        form.value.exam,
        form.value.start,
        form.value.end
      )
      .subscribe((data) => {
        this.title = form.value.lecture;

        this.submitted = true;
        if (this.lectureForm.invalid) {
          return;
        }
        this.router.navigateByUrl("/dashboard");
      });
  }

  deleteLecture(): void {
    this.apiService
      .remLecture(
        this.userService.getUserId(),
        this.lectureId ? this.lectureId : "0"
      )
      .subscribe((data) => console.log(data["message"]));
    this.router.navigateByUrl("/dashboard");
  }
}
