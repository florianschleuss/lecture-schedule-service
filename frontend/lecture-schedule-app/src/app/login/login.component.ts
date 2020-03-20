import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ApiClientService } from '../api-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: ApiClientService, private router: Router) { }

  ngOnInit() {
  }

  registerUser(firstName: string, lastName: string, email: string, password: string): void {
    this.apiService.addUser(firstName, lastName, email, password).subscribe(data => {
      if (data['user-id']) {
        this.router.navigateByUrl('/dashboard')
      }
    })
    this.apiService.setAuthenticated(true)
  }

  loginUser(email: string, password: string): void {
    this.apiService.authUser(email, password).subscribe(data => {
      this.apiService.setAuthenticated(data['authenticated'])
      if (data["authenticated"]) {
        this.router.navigateByUrl("/dashboard");
      } else {
        // not authentificated
      }
    })
  }
}
