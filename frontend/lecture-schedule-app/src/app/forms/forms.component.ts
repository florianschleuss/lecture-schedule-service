import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, Validators } from '@angular/forms';

import { ApiClientService } from '../api-client.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  protected title: string = 'Neue Vorlesung'
  protected name: string = ''
  protected course: string = ''
  protected exam: string = ''
  //protected examDate: string = '12/5/2021'

    lectureForm = this.fb.group({
        lecture: [null, Validators.required],
        course: [null, Validators.required],
        exam: [null],
        examDate: [null],
      });


constructor(private fb: FormBuilder, private userService: UserService, private apiService: ApiClientService) {}

  ngOnInit() {
    if (this.userService.getLectureId()){
      this.apiService.getLecture('tollerUser', this.userService.getLectureId()).subscribe(data =>
        {
          this.title = data['name']
          this.name = data['name']
          this.course = data['course']
          this.exam = data['exam']
        })
      this.userService.setLectureId(undefined)
    }
  }

  onSubmit(form: NgForm) {
    this.apiService.addLecture('userId', form.value.lecture,form.value.course,form.value.exam).subscribe(data => {
      this.title = form.value.lecture
    });
  }

}

