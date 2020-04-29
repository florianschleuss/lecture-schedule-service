import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

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
  constructor(
    public dialogRef: MatDialogRef<DialogEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  dates: date[] = [
    { value: true, viewValue: "Vormittag" },
    { value: false, viewValue: "Nachmittag" },
  ];

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
