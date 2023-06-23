import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {

  ngOnInit(): void {
    this.data = localStorage.getItem("mydata")
    this.dataObj = JSON.parse(this.data).user_id
    console.log(this.dataObj);
    this.http.get(`http://localhost:8080/user/${this.dataObj}`).subscribe((res: any) => {
      this.mydata = res[0]
      console.log(this.mydata, "mydata");

      this.username = this.mydata.username
      this.email = this.mydata.email
      this.address = this.mydata.address
      this.phonenumber = this.mydata.phonenumber
      this.dob = this.mydata.dob
    })
  }

  constructor(private router: Router, private http: HttpClient) { }

  data: any
  dataObj: any
  mydata: any

  username: any
  email: any
  address: any
  phonenumber: any
  dob: any

  update() {
    this.http.put(`http://localhost:8080/user/update/${this.dataObj}`, {
      username: this.username,
      email: this.email,
      address: this.address,
      phonenumber: this.phonenumber,
      dob: this.dob
    }).subscribe((res: any) => {
      this.router.navigate([`/user/${this.dataObj}`])
      console.log(res);

    })
  }

}
