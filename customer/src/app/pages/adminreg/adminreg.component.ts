import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminreg',
  templateUrl: './adminreg.component.html',
  styleUrls: ['./adminreg.component.css']
})
export class AdminregComponent {

  constructor(private http: HttpClient, private router: Router) { }

  adminName: any
  email: any
  password: any
  conpassword: any

  register() {
    this.http.post("http://localhost:8080/admin/register", {
      adminName: this.adminName,
      email: this.email,
      password: this.password,
      conpassword: this.conpassword
    }).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['/admin/login'])
    })
  }
}
