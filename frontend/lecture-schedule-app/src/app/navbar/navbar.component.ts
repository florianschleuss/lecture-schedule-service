import { Component, OnInit, Input } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ApiClientService } from '../api-client.service'

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  isMenuOpen = true;
  contentMargin = 240;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private apiClient: ApiClientService) {}

  ngOnInit() {
  }

  logout(): void{
    this.router.navigateByUrl('/login')
    this.apiClient.setAuthenticated(false)
  }

  ifAuthenticated(): boolean{
    return this.apiClient.getAuthenticated()
  }

  onToolbarMenuToggle() {
    console.log("On toolbar toggled", this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if (!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }
}
