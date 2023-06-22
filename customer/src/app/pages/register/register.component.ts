import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private http: HttpClient, private router: Router) { }

  username: any
  email: any
  password: any
  conpassword: any

  register() {
    this.http.post("http://localhost:8080/user/register", {
      username: this.username,
      email: this.email,
      password: this.password,
      conpassword: this.conpassword
    }).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['/login'])
    })
  }
}
