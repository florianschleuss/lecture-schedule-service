import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { FormsComponent } from "./forms/forms.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "calendar", component: CalendarComponent },
  { path: "forms", component: FormsComponent },
  { path:'', redirectTo: '/login', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
