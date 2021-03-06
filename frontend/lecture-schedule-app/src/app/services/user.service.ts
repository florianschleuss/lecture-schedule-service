import { Injectable } from "@angular/core";

import { ApiClientService } from "./api-client.service";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private lectureId: string;
  private dateId: string;
  private userId: string;
  private firstName: string = "Vorname";
  private lastName: string = "Nachname";
  private email: string = "Email";
  private password: string = "Passwort";
  private lectureCount: number;
  private admin: boolean = false;

  constructor(private apiClientService: ApiClientService) {}

  setUserId(userId: string): void {
    this.userId = userId;
    this.apiClientService.getUser(this.userId).subscribe((data) => {
      this.firstName = data["first-name"];
      this.lastName = data["last-name"];
      this.email = data["email"];
      this.password = data["password"];
    });
  }

  getUser(): Array<string> {
    return [this.firstName, this.lastName, this.email, this.password];
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

  setDateId(dateId: string): void {
    this.dateId = dateId;
  }

  getDateId(): string {
    return this.dateId;
  }

  getLectureCount(): number {
    return this.lectureCount;
  }

  setLectureCount(lectureCount: number): void {
    this.lectureCount = lectureCount;
  }

  getAdmin(): boolean {
    return this.admin;
  }

  setAdmin(state: boolean): void {
    this.admin = state;
  }
}
