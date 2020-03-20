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
    columnsToDisplay = ['Vorlesung', 'Kurs', 'Prüfung'];
    expandedElement: PeriodicElement | null;
}

export interface PeriodicElement {
    Vorlesung: string;
    Kurs: string;
    Prüfung: string;
    description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        Vorlesung: 'Einführung WI',
        Kurs: "WWI2018H",
        Prüfung: 'Klausur',
        description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
    }, {
        Vorlesung: 'Mathematik II',
        Kurs: "WWI2018H",
        Prüfung: 'Klausur',
        description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`
    },
];