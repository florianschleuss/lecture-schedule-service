import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FullCalendarModule } from "@fullcalendar/angular";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { NavbarComponent } from "./components/navbar/navbar.component";
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
  MatSlideToggleModule,
  MatBadgeModule,
  MatStepperModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
} from "@angular/material";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AppRoutingModule } from "./app-routing.module";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { FormsComponent } from "./components/forms/forms.component";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./components/login/login.component";
import { LectureTableComponent } from "./components/lecture-table/lecture-table.component";
import { DatesTableComponent } from "./components/dates-table/dates-table.component";
import { UserAccountComponent } from "./components/user-account/user-account.component";
import { ThemeSwitcherComponent } from "./components/theme-switcher/theme-switcher.component";
import { SnackbarComponent } from "./components/snackbar/snackbar.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    CalendarComponent,
    FormsComponent,
    LoginComponent,
    LectureTableComponent,
    DatesTableComponent,
    UserAccountComponent,
    ThemeSwitcherComponent,
    SnackbarComponent,
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
    MatSlideToggleModule,
    MatBadgeModule,
    MatStepperModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    ScrollingModule,
    FullCalendarModule,
    MatSnackBarModule,
  ],
  providers: [ThemeSwitcherComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
