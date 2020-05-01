import { Component, OnInit, Input } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { ApiClientService } from "../../../services/api-client.service";
import { UserService } from "../../../services/user.service";
import { ThemeSwitcherComponent } from "../theme-switcher/theme-switcher.component";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  name = "test";
  mailText: string = "";

  mode = new FormControl("side"); //side, push and over modes

  themeColor = "light-theme";

  isMenuOpen = false;
  contentMargin = 240;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result) => result.matches));

  constructor(
    public themeSwitch: ThemeSwitcherComponent,
    private userService: UserService,
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private apiClient: ApiClientService
  ) {}

  setDefaultTheme() {
    // if theme is stored in storage - use it
    if (localStorage.getItem("pxTheme")) {
      //set theme color to one from storage
      this.themeColor = localStorage.getItem("pxTheme");
      //add that class to body
      const body = document.getElementsByTagName("body")[0];
      body.classList.add(this.themeColor);
    }
  }

  themeSwitcher() {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove(this.themeColor);
    // switch theme
    this.themeColor == "light-theme"
      ? (this.themeColor = "dark-theme")
      : (this.themeColor = "light-theme");
    body.classList.add(this.themeColor);
    //save it to local storage
    localStorage.setItem("pxTheme", this.themeColor);
  }

  ngOnInit() {
    this.setDefaultTheme();
    this.mailText =
      "mailto:danielschworm@t-online.de,florian.schleuss@hpe.com,tobias.strauss@hpe.com?subject=Hilfe&body";
  }

  mailMe() {
    this.mailText =
      "mailto:danielschworm@t-online.de,florian.schleuss@hpe.com,tobias.strauss@hpe.com?subject=Hilfe&body";
    window.location.href = this.mailText;
  }

  logout(): void {
    this.router.navigateByUrl("/login");
    this.apiClient.setAuthenticated(false);
    this.userService.setUserId(undefined);
    this.userService.setAdmin(false);
  }

  ifAuthenticated(): boolean {
    return this.apiClient.getAuthenticated();
  }

  ifAdmin(): boolean {
    return this.userService.getAdmin();
  }

  onToolbarMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;

    if (!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }

  resetLectureId(): void {
    this.userService.setLectureId(undefined);
  }

  lastName(): string {
    return this.userService.getUser()[1];
  }

  firstName(): string {
    return this.userService.getUser()[0];
  }
}
