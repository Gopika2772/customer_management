import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  constructor(private http: HttpClient, private router: Router) { }

  email: any
  password: any

  login() {
    this.http.post("http://localhost:8080/admin/login", { email: this.email, password: this.password }).subscribe((res: any) => {
      if (res.bool == true) {
        this.router.navigate([`/admin/allusers`])
      }
      else {
        this.router.navigate(['/admin/login'])
      }
      console.log(res);
    })
    // console.log(this.email, this.password);
  }

}
