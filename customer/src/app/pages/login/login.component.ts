import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http: HttpClient, private router: Router) { }

  email: any
  password: any

  login() {
    this.http.post("http://localhost:8080/user/login", { email: this.email, password: this.password }).subscribe((res: any) => {
      if (res.bool == true) {
        localStorage.setItem("mydata", JSON.stringify(res.data))
        this.router.navigate([`/user/${res.data.user_id}`])
      }
      else {
        this.router.navigate(['/login'])
      }
    })
    // console.log(this.email, this.password);
  }
}
