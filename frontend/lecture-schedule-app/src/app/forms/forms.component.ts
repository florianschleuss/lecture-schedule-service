import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
    addressForm = this.fb.group({
        vorlesung: null,
        firstName: [null, Validators.required],
        prüfung: [null, Validators.required],
        address: [null, Validators.required],
      });


constructor(private fb: FormBuilder) {}

  ngOnInit() {
  }

  onSubmit() {
    alert('Thanks!');
  }

}
