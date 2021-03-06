import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, NgForm } from "@angular/forms";
import { MatDialog } from "@angular/material";

import { ApiClientService } from "../../../services/api-client.service";
import { UserService } from "../../../services/user.service";
import { DialogEditComponent } from "../dates-table/dialog-edit/dialog-edit.component";
import { DialogDeleteComponent } from "../dates-table/dialog-delete/dialog-delete.component";

interface date {
  value: boolean;
  viewValue: string;
}

@Component({
  selector: "app-dates-table",
  templateUrl: "./dates-table.component.html",
  styleUrls: ["./dates-table.component.css"],
})
export class DatesTableComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  protected displayedColumns: string[] = ["date", "clock", "room", "delete"];
  protected dataSource: JSON = JSON.parse("[]");
  protected timeFrame: string = "";

  dates: date[] = [
    { value: true, viewValue: "Vormittag" },
    { value: false, viewValue: "Nachmittag" },
  ];

  constructor(
    private userService: UserService,
    private _formBuilder: FormBuilder,
    private apiService: ApiClientService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.apiService
      .getDates(this.userService.getUserId(), this.userService.getLectureId())
      .subscribe((data) => (this.dataSource = data));

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required],
    });
    this.apiService
      .getLecture(this.userService.getUserId(), this.userService.getLectureId())
      .subscribe((data) => {
        this.timeFrame = data["start"] + " - " + data["end"];
      });
  }

  onSubmit(date: string, morning: boolean, room: string) {
    this.apiService
      .addDate(
        this.userService.getUserId(),
        this.userService.getLectureId(),
        date,
        morning,
        room
      )
      .subscribe((data) => {
        this.apiService
          .getDates(
            this.userService.getUserId(),
            this.userService.getLectureId()
          )
          .subscribe((data) => {
            this.dataSource = data;
          });
      });
  }

  deleteDate(dateId: string) {
    this.apiService
      .remDate(
        this.userService.getUserId(),
        this.userService.getLectureId(),
        dateId
      )
      .subscribe((data) => {
        this.apiService
          .getDates(
            this.userService.getUserId(),
            this.userService.getLectureId()
          )
          .subscribe((data) => (this.dataSource = data));
      });
  }

  openDialogEdit(dateId: string): void {
    this.userService.setDateId(dateId);
    let dialogRef = this.dialog.open(DialogEditComponent, {
      width: "250px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.apiService
        .getDates(this.userService.getUserId(), this.userService.getLectureId())
        .subscribe((data) => (this.dataSource = data));
    });
  }

  openDialogDelete(dateId: string): void {
    this.userService.setDateId(dateId);
    let dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: "250px",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.apiService
        .getDates(this.userService.getUserId(), this.userService.getLectureId())
        .subscribe((data) => (this.dataSource = data));
    });
  }
}
