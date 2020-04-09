import { Component, OnInit } from "@angular/core";
import dayGridPlugin from "@fullcalendar/daygrid";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"],
})
export class CalendarComponent implements OnInit {
  calendarPlugins = [dayGridPlugin]; // important!

  private testEvents: Object = {
    semesterStart: "12/03/2020",
    semseterEnd: "13/04/2020",
    dates: [
      [
        {
          lecture: "Vorlesung2",
          room: "R320",
        },
        {
          lecture: "-",
          room: "",
        },
      ],
      [
        {
          lecture: "Vorlesung3",
          room: "R120",
        },
        {
          lecture: "Vorlesung1",
          room: "R534",
        },
      ],
    ],
  };

  protected calendarEvents: Array<Object> = [
    { title: "13:15-16.30\nDatenbanken\nR102", date: "2020-04-09" },
    { title: "09:00-12.15\nDatenbanken", date: "2020-04-09" },
    { title: "Programieren II", date: "2020-04-10" },
  ];

  constructor() {}

  //   parseObject(inputData: Object): Array<Object> {}

  ngOnInit() {}
}
