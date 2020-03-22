import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./navbar/navbar.component";
import { FormControl, Validators } from "@angular/forms";
import { LayoutModule } from "@angular/cdk/layout";
import {
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSlideToggleModule
} from "@angular/material";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AppRoutingModule } from "./app-routing.module";
import { CalendarComponent } from "./calendar/calendar.component";
import { FormsComponent } from "./forms/forms.component";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { LectureTableComponent } from "./lecture-table/lecture-table.component";

// const routes: Routes = [
//   { path: "dashboard", outlet: "mainContainer", component: DashboardComponent },
//   { path: "calendar", component: CalendarComponent },
//   { path: "forms", component: FormsComponent }
// ];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        DashboardComponent,
        CalendarComponent,
        FormsComponent,
        LoginComponent,
        LectureTableComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        AppRoutingModule,
        RouterModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatCheckboxModule,
        MatNativeDateModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        MatTabsModule,
        MatFormFieldModule,
        HttpClientModule,
        MatSlideToggleModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
