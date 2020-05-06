import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FullCalendarModule } from "@fullcalendar/angular";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { NavbarComponent } from "./components/UI/navbar/navbar.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
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
import { DashboardComponent } from "./components/User/dashboard/dashboard.component";
import { AppRoutingModule } from "./app-routing.module";
import { MatDividerModule } from "@angular/material/divider";
import { CalendarComponent } from "./components/User/calendar/calendar.component";
import { FormsComponent } from "./components/User/forms/forms.component";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./components/UI/login/login.component";
import { LectureTableComponent } from "./components/User/lecture-table/lecture-table.component";
import { DatesTableComponent } from "./components/User/dates-table/dates-table.component";
import { ThemeSwitcherComponent } from "./components/UI/theme-switcher/theme-switcher.component";
import { SnackbarComponent } from "./components/UI/snackbar/snackbar.component";
import { AdminDashboardComponent } from "./components/Admin/admin-dashboard/admin-dashboard.component";
import { UserTableComponent } from "./components/Admin/user-table/user-table.component";
import { DialogEditComponent } from "./components/User/dates-table/dialog-edit/dialog-edit.component";
import { DialogDeleteComponent } from "./components/User/dates-table/dialog-delete/dialog-delete.component";
import { DialogLogoutComponent } from "./components/UI/navbar/dialog-logout/dialog-logout.component";
import { UserCardComponent } from "./components/User/user-card/user-card.component";

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
    ThemeSwitcherComponent,
    SnackbarComponent,
    AdminDashboardComponent,
    UserTableComponent,
    DialogEditComponent,
    DialogDeleteComponent,
    DialogLogoutComponent,
    UserCardComponent,
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
    MatExpansionModule,
    MatDialogModule,
    MatDividerModule,
  ],
  providers: [ThemeSwitcherComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
