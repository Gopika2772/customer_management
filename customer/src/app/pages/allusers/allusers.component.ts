import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  ngOnInit(): void {
    this.http.get("http://localhost:8080/alluser").subscribe((res: any) => {
      this.users = res
      console.log(this.users);

    })
  }
  constructor(private router: Router, private http: HttpClient) { }
  // users = [
  //   {
  //     name: "Gopika",
  //     email: "gopika@gmail.com",
  //     address: "chennai",
  //     dob: "july",
  //     phoneNumber: 12345678
  //   }
  // ]

  users: any

  updateUser(id: any) {
    this.router.navigate([`/update/${id}`])
  }

  deleteUser(id: any) {
    this.http.delete(`http://localhost:8080/user/delete/${id}`).subscribe((res: any) => {
      console.log(res);
    })
  }

}
