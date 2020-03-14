import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./navbar/navbar.component";
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
  MatDatepickerModule
} from "@angular/material";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AppRoutingModule } from "./app-routing.module";
import { CalendarComponent } from "./calendar/calendar.component";
import { FormsComponent } from "./forms/forms.component";
import { ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "calendar", component: CalendarComponent },
  { path: "forms", component: FormsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    CalendarComponent,
    FormsComponent
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
    RouterModule.forRoot(routes),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
