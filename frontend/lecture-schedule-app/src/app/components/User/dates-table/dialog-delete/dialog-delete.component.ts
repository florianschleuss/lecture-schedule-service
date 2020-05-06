import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

import { ApiClientService } from "../../../../services/api-client.service";
import { UserService } from "../../../../services/user.service";

@Component({
  selector: "app-dialog-delete",
  templateUrl: "./dialog-delete.component.html",
  styleUrls: ["./dialog-delete.component.css"],
})
export class DialogDeleteComponent implements OnInit {
  protected dataSource: JSON = JSON.parse("[]");

  constructor(
    private userService: UserService,
    private apiService: ApiClientService,
    public dialogRef: MatDialogRef<DialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteDate() {
    this.apiService
      .remDate(
        this.userService.getUserId(),
        this.userService.getLectureId(),
        this.userService.getDateId()
      )
      .subscribe(() => this.dialogRef.close());
  }
}
