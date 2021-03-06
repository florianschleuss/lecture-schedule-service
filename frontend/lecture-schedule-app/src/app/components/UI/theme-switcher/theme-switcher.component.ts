import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-theme-switcher",
  templateUrl: "./theme-switcher.component.html",
  styleUrls: ["./theme-switcher.component.css"],
})
export class ThemeSwitcherComponent implements OnInit {
  // default theme
  themeColor = "light-theme";

  constructor() {}

  ngOnInit() {
    this.setDefaultTheme();
  }

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
    // switch theme
    this.themeColor == "light-theme"
      ? (this.themeColor = "dark-theme")
      : (this.themeColor = "light-theme");
  }
}
