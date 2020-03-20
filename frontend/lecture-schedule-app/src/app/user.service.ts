import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private lectures: JSON = JSON.parse('[]');
  private lectureId: string;

  constructor() { }

  setLectureId(lectureId: string): void {
    this.lectureId = lectureId
  }

  getLectureId(): string {
    return this.lectureId
  }

  getLectures(): JSON {
    return this.lectures
  }

}
