import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavbarComponent } from "./components/UI/navbar/navbar.component";
import { LoginComponent } from "./components/UI/login/login.component";
import { DashboardComponent } from "./components/User/dashboard/dashboard.component";
import { CalendarComponent } from "./components/User/calendar/calendar.component";
import { FormsComponent } from "./components/User/forms/forms.component";
import { AdminDashboardComponent } from "./components/Admin/admin-dashboard/admin-dashboard.component";
import { UserCardComponent } from "./components/User/user-card/user-card.component";
import { from } from "rxjs";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "calendar", component: CalendarComponent },
  { path: "forms", component: FormsComponent },
  { path: "admin-dashboard", component: AdminDashboardComponent },
  { path: "user", component: UserCardComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
