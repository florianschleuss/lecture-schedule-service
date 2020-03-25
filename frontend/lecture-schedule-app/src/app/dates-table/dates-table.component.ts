import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

import { ApiClientService } from '../services/api-client.service';
import { UserService } from '../services/user.service';


interface date {
    value: boolean;
    viewValue: string;
}

@Component({
    selector: 'app-dates-table',
    templateUrl: './dates-table.component.html',
    styleUrls: ['./dates-table.component.css']
})
export class DatesTableComponent implements OnInit {
    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;

    protected displayedColumns: string[] = ['date', 'clock', 'room', 'delete'];
    protected dataSource: JSON = JSON.parse('[]')

    dates: date[] = [
        { value: true, viewValue: 'Vormittag' },
        { value: false, viewValue: 'Nachmittag' },
    ];

    constructor(private userService: UserService, private _formBuilder: FormBuilder, private apiService: ApiClientService) { }

    ngOnInit() {
        this.apiService.getDates('test-user', this.userService.getLectureId()).subscribe(data => this.dataSource = data)

        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }

    onSubmit(date: string, morning: boolean, room: string) {
        this.apiService.addDate('test-user', this.userService.getLectureId(), date, morning, room).subscribe(data => {
            console.log(data)
            this.apiService.getDates('test-user', this.userService.getLectureId()).subscribe(data => this.dataSource = data)
        })
    }

}