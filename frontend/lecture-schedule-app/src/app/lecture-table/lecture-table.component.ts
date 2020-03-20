import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

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
    dataSource = ELEMENT_DATA;
    columnsToDisplay = ['Vorlesung', 'Kurs', 'Prüfungsform'];
    expandedElement: LectureElement | null;
}

export interface LectureElement {
    Vorlesung: string;
    Kurs: string;
    Prüfungsform: string;
}

const ELEMENT_DATA: LectureElement[] = [
    {
        Vorlesung: 'Einführung WI',
        Kurs: "WWI2018H",
        Prüfungsform: 'Klausur',
    },
    {
        Vorlesung: 'Einführung WI',
        Kurs: "WWI2018H",
        Prüfungsform: 'Klausur',
    },
    {
        Vorlesung: 'Einführung WI',
        Kurs: "WWI2018H",
        Prüfungsform: 'Klausur',
    },
    {
        Vorlesung: 'Einführung WI',
        Kurs: "WWI2018H",
        Prüfungsform: 'Klausur',
    },
    {
        Vorlesung: 'Einführung WI',
        Kurs: "WWI2018H",
        Prüfungsform: 'Klausur',
    },
    {
        Vorlesung: 'Einführung WI',
        Kurs: "WWI2018H",
        Prüfungsform: 'Klausur',
    },
    {
        Vorlesung: 'Einführung WI',
        Kurs: "WWI2018H",
        Prüfungsform: 'Klausur',
    },
    {
        Vorlesung: 'Einführung WI',
        Kurs: "WWI2018H",
        Prüfungsform: 'Klausur',
    },
    {
        Vorlesung: 'Einführung WI',
        Kurs: "WWI2018H",
        Prüfungsform: 'Klausur',
    },
    {
        Vorlesung: 'Einführung WI',
        Kurs: "WWI2018H",
        Prüfungsform: 'Klausur',
    },
    {
        Vorlesung: 'Einführung WI',
        Kurs: "WWI2018H",
        Prüfungsform: 'Klausur',
    },
    {
        Vorlesung: 'Einführung WI',
        Kurs: "WWI2018H",
        Prüfungsform: 'Klausur',
    },
    {
        Vorlesung: 'Einführung WI',
        Kurs: "WWI2018H",
        Prüfungsform: 'Klausur',
    },
    {
        Vorlesung: 'Einführung WI',
        Kurs: "WWI2018H",
        Prüfungsform: 'Klausur',
    },
    {
        Vorlesung: 'Einführung WI',
        Kurs: "WWI2018H",
        Prüfungsform: 'Klausur',
    },
];