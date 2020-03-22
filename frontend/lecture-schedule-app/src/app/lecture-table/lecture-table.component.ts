import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

import { ApiClientService } from '../services/api-client.service';
import { UserService } from '../services/user.service';


/**
 * @title Table with expandable rows
 */
@Component({
    selector: 'app-lecture-table',
    templateUrl: './lecture-table.component.html',
    styleUrls: ['./lecture-table.component.css'],
})

export class LectureTableComponent {
    protected dataSource: JSON = JSON.parse('[]')
    protected columnNames = { name: 'Vorlesung', course: 'Kurs', exam: 'Prüfung' }
    protected columnsToDisplay = ['name', 'course', 'exam'];

    constructor(private apiService: ApiClientService, private userService: UserService, private router: Router) { }

    ngOnInit() {
        this.apiService.getLectures('meinLiblingsUser').subscribe(data => {
            this.dataSource = data
        });
    }

    onItemClick(element: JSON): void {
        this.userService.setLectureId(element['lecture-id'])
        this.router.navigateByUrl("/forms");
    }
}

