import { Component, OnInit } from "@angular/core";
import dayGridPlugin from "@fullcalendar/daygrid";

import { ApiClientService } from "../../services/api-client.service";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"],
})
export class CalendarComponent implements OnInit {
  calendarPlugins = [dayGridPlugin]; // important!

  protected calendarEvents: Array<Object> = [];

  constructor(
    private apiClientService: ApiClientService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.apiClientService
      .getTable(this.userService.getUserId())
      .subscribe((data) => (this.calendarEvents = data["data"]));
  }

  getEvent(): Array<Object> {
    return this.calendarEvents;
  }
}
