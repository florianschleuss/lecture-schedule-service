import { Component, OnInit, Input } from '@angular/core';

import { ApiClientService } from '../api-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: ApiClientService) {}
// Für Dashboard
  @Input()
  userId: string;

  ngOnInit() {
  }

  registerUser(firstName: string, lastName: string, email:string, password: string): void {
    this.apiService.addUser(firstName, lastName, email, password).subscribe(value => console.log(value))
  }

  loginUser(email:string, password:string): void {
    this.apiService.authUser(email, password).subscribe(value => console.log(value))
  }
}
