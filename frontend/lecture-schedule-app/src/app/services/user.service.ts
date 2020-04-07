import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private lectureId: string;
  private userId: string;

  constructor() {}

  setUserId(userId: string): void {
    this.userId = userId;
  }

  getUserId(): string {
    return this.userId;
  }

  setLectureId(lectureId: string): void {
    this.lectureId = lectureId;
  }

  getLectureId(): string {
    return this.lectureId;
  }
}
