import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

import { ApiClientService } from '../api-client.service';
import { UserService } from '../user.service';


/**
 * @title Table with expandable rows
 */
@Component({
    selector: 'app-lecture-table',
    templateUrl: './lecture-table.component.html',
    styleUrls: ['./lecture-table.component.css'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({ height: '0px', minHeight: '0' })),
            state('expanded', style({ height: '*' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
})



export class LectureTableComponent {
    protected dataSource: JSON = JSON.parse('[]')
    protected columnNames = {name: 'Vorlesung', course: 'Kurs', exam: 'Prüfung'}
    protected columnsToDisplay = ['name', 'course', 'exam'];

    constructor(private apiService: ApiClientService, private userService: UserService,private router: Router) {}

    ngOnInit() {
        this.apiService.getLectures('meinLiblingsUser').subscribe(data => {
            this.dataSource = data            
        });
    }

    onItemClick(element: JSON):void{
        this.userService.setLectureId(element['lecture-id'])
        this.router.navigateByUrl("/forms");
    }


}

