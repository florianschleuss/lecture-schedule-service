import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormControl } from "@angular/forms";

import { UserService } from "../../../../services/user.service";
import { ApiClientService } from "../../../../services/api-client.service";

interface date {
  value: boolean;
  viewValue: string;
}

@Component({
  selector: "app-dialog-edit",
  templateUrl: "./dialog-edit.component.html",
  styleUrls: ["./dialog-edit.component.css"],
})
export class DialogEditComponent implements OnInit {
  protected morning: boolean;
  protected date: FormControl;
  protected room: string;
  constructor(
    public dialogRef: MatDialogRef<DialogEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    private apiClientService: ApiClientService
  ) {}

  dates: date[] = [
    { value: true, viewValue: "Vormittag" },
    { value: false, viewValue: "Nachmittag" },
  ];

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.apiClientService
      .getDate(
        this.userService.getUserId(),
        this.userService.getLectureId(),
        this.userService.getDateId()
      )
      .subscribe((data) => {
        this.room = data["room"];
        this.date = new FormControl(new Date(data["date"]));
        this.morning = data["morning"];
      });
  }

  update(date: string, morning: boolean, room: string): void {
    this.apiClientService
      .remDate(
        this.userService.getUserId(),
        this.userService.getLectureId(),
        this.userService.getDateId()
      )
      .subscribe();
    this.apiClientService
      .addDate(
        this.userService.getUserId(),
        this.userService.getLectureId(),
        date,
        morning,
        room
      )
      .subscribe(() => this.dialogRef.close());
  }
}
